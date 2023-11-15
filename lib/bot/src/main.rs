use futures_util::{SinkExt, StreamExt};
use std::collections::HashMap;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use tokio::sync::mpsc::{Receiver, Sender};
use tokio::sync::{mpsc, Mutex};
use warp::ws::{Message, WebSocket};
use warp::Filter;

static NEXT_USER_ID: AtomicUsize = AtomicUsize::new(1);
type Users = Arc<Mutex<HashMap<usize, Arc<Mutex<WebSocket>>>>>;

#[tokio::main]
async fn main() {
    let (tx, rx) = mpsc::channel::<String>(10);
    let rx = Arc::new(Mutex::new(rx));

    let users: Users = Arc::new(Mutex::new(HashMap::new()));

    // Clone `users` for the WebSocket route
    let users_for_websocket = users.clone();
    let websocket_route = warp::path("ws")
        .and(warp::ws())
        .and(warp::any().map(move || tx.clone()))
        .and(warp::any().map(move || users_for_websocket.clone()))
        .map(|ws: warp::ws::Ws, tx: Sender<String>, users: Users| {
            ws.on_upgrade(move |socket| handle_connection(socket, tx, users))
        });

    // Clone `users` again for the bot task
    let users_for_bot = users.clone();
    let rx_clone = rx.clone();
    tokio::spawn(async move {
        start_bot(rx_clone, &users_for_bot).await;
    });

    // Start the warp server with the route
    warp::serve(websocket_route)
        .run(([127, 0, 0, 1], 3030))
        .await;
}

async fn handle_connection(socket: WebSocket, tx: Sender<String>, users: Users) {
    let user_id = NEXT_USER_ID.fetch_add(1, Ordering::Relaxed);
    let socket = Arc::new(Mutex::new(socket));
    let mut users_guard = users.lock().await;
    users_guard.insert(user_id, socket.clone());

    drop(users_guard);
    loop {
        let mut guard = socket.lock().await; // Await the lock here
        match guard.next().await {
            Some(result) => match result {
                Ok(msg) => {
                    handle_message(msg, &tx).await;
                }
                Err(e) => {
                    eprintln!("websocket error: {:?}", e);
                    break;
                }
            },
            None => break,
        }
    }

    let mut users_guard = users.lock().await;
    users_guard.remove(&user_id);
}

async fn handle_message(msg: Message, tx: &Sender<String>) {
    // Only process text messages
    if let Ok(text) = msg.to_str() {
        // Forward the message (e.g., "start" or "stop") to the bot control logic
        if let Err(_send_error) = tx.send(text.to_string()).await {
            // Handle the error, e.g., log or notify
        }
    }
}

async fn broadcast_message(message: &str, users: Users) {
    let users_guard = users.lock().await;
    for (_, ws) in users_guard.iter() {
        let mut ws_guard = ws.lock().await;
        if let Err(e) = ws_guard.send(Message::text(message.to_string())).await {
            eprintln!("Error sending message: {}", e);
        }
    }
}

async fn start_bot(rx: Arc<Mutex<Receiver<String>>>, users: &Users) {
    let mut bot_active = false;
    loop {
        if let Some(message) = rx.lock().await.recv().await {
            match message.as_str() {
                "start" => {
                    println!("Bot started");
                    bot_active = true;
                }
                "stop" => {
                    println!("Bot stopped");
                    bot_active = false;
                }
                _ => {
                    println!("Unknown command: {}", message);
                }
            }

            // Broadcast update message after processing command
            broadcast_message(&format!("Bot status update: {}", message), users.clone()).await;
        }

        // Bot logic executed when bot_active is true
        if bot_active {
            // Example bot task: print a simple message
            println!("Bot is executing its tasks...");
            // Here you can add more complex tasks or logic
            // ...

            // Wait a bit before the next iteration to simulate task execution
            tokio::time::sleep(std::time::Duration::from_secs(1)).await;
        }
    }
}


