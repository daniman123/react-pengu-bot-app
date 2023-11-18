function simulateClick(element) {
	["mouseover", "mousedown", "mouseup", "click"].forEach((eventType) => {
		element.dispatchEvent(
			new MouseEvent(eventType, {
				bubbles: true,
				cancelable: true,
				view: window,
			})
		);
	});
}

const main = document.querySelector("button.btn-standard.call-to-action");
if (main) {
	console.log("Button found:", main);
	simulateClick(main);
	// Send a message to the background script
	// eslint-disable-next-line no-undef
	chrome.runtime.sendMessage({ buttonClicked: true }, function (response) {
		console.log("Response from background:", response);
	});
} else {
	console.log("Button not found");
}
