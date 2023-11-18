// eslint-disable-next-line no-undef
chrome.action.onClicked.addListener((tab) => {
	if (
		tab.url &&
		tab.url.includes(
			"https://www.ea.com/ru-ru/ea-sports-fc/ultimate-team/web-app/"
		)
	) {
		// eslint-disable-next-line no-undef
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["contentScripts/webAppContentScripts/getCurrentPage.js"],
		});
	}
});

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.buttonClicked) {
		console.log("Button was clicked in content script");
		// Perform background script actions here
	}

	if (request.transfersTab) {
		console.log("trans:", request.transfersTab);

		// Perform background script actions here
	}

	// Optionally send a response back to the content script
	sendResponse({ message: "Message received in background script" });
});
