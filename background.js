// eslint-disable-next-line no-undef
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// if (
	// 	tab.url &&
	// 	tab.url.includes(
	// 		"https://www.ea.com/ru-ru/ea-sports-fc/ultimate-team/web-app/"
	// 	)
	// ) {
		// eslint-disable-next-line no-undef
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["contentScript.js"],
		});
	// }
});
