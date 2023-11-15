import React, { useEffect, useState } from "react";

const BotRuntime = () => {
	const [ws, setWs] = useState<WebSocket | null>(null);

	useEffect(() => {
		if (!ws) return;

		const onMessage = (msg: MessageEvent) => {
			console.log(msg.data);
		};

		ws.onmessage = onMessage;

		return () => {
			ws.onmessage = null;
		};
	}, [ws]);

	const connectWebSocket = () => {
		const websocket = new WebSocket("ws://localhost:3030/ws");
		setWs(websocket);
	};

	const sendCommand = (command: any) => {
		ws?.send(command);
	};

	const disconnectWebSocket = () => {
		if (!ws) return;
		ws.close();
		ws.onmessage = null;
		setWs(null);
	};

	return (
		<div className="w-full grid auto-cols-fr grid-flow-col gap-3 px-3">
			<button onClick={connectWebSocket}>Connect</button>
			<button onClick={disconnectWebSocket}>Disconnect</button>
			<button
				className="border rounded text-lg font-semibold bg-orange-400"
				onClick={() => sendCommand("stop")}
			>
				Reset
			</button>
			<button
				className="border rounded text-lg font-semibold bg-green-600"
				onClick={() => sendCommand("start")}
			>
				Search
			</button>
			<button
				className="border rounded text-lg font-semibold bg-green-600"
				onClick={() => sendCommand("YO")}
			>
				YO
			</button>
		</div>
	);
};

export default BotRuntime;
