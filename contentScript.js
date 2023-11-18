// const injectApp = () => {
// 	const appDiv = document.createElement("div");
// 	appDiv.id = "my-react-app";
// 	document.body.appendChild(appDiv);

// 	const script = document.createElement("script");
// 	// eslint-disable-next-line no-undef
// 	script.src = chrome.runtime.getURL("build/static/js/main.9228a89c.js");
// 	script.onload = () => script.remove();
// 	(document.head || document.documentElement).appendChild(script);
// };

// const loadCSS = (href) => {
// 	const link = document.createElement("link");
// 	// eslint-disable-next-line no-undef
// 	link.href = chrome.runtime.getURL("build/static/css/main.46d4ee86.css");
// 	link.type = "text/css";
// 	link.rel = "stylesheet";
// 	document.head.appendChild(link);
// };

// loadCSS(); // No argument needed here now
// injectApp();


function simulateClick(element) {
    ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventType => {
        element.dispatchEvent(new MouseEvent(eventType, { 
            bubbles: true, 
            cancelable: true, 
            view: window 
        }));
    });
}

const main = document.querySelector("button.btn-standard.call-to-action");
if (main) {
    console.log('Button found:', main);
    simulateClick(main);
    // Send a message to the background script
    // eslint-disable-next-line no-undef
    chrome.runtime.sendMessage({ buttonClicked: true }, function(response) {
        console.log('Response from background:', response);
    });
} else {
    console.log('Button not found');
}
