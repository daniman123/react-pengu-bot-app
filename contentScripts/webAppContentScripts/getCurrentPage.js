// import { simulateClick } from "./utils";

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

// const main = document.querySelector("button.btn-standard.call-to-action");
const isTransferMarketOpen = document.querySelector(
	"button.ut-tab-bar-item.icon-transfer.selected"
);

if (isTransferMarketOpen) {
	// eslint-disable-next-line no-undef
	chrome.runtime.sendMessage({ transfersTab: true }, function (response) {
		console.log("Response from background:", response);
	});
} else {
	// eslint-disable-next-line no-undef
	chrome.runtime.sendMessage({ transfersTab: false }, function (response) {
		console.log("Response from background:", response);
	});
	const transfersTab = document.querySelector(
		"button.ut-tab-bar-item.icon-transfer"
	);

	simulateClick(transfersTab);

	const trans = document.querySelector(
		"button.ut-tab-bar-item.icon-transfer.selected"
	);

	if (trans) {
		// eslint-disable-next-line no-undef
		chrome.runtime.sendMessage({ transfersTab: true }, function (response) {
			console.log("Response from background:", response);
		});
	}
}
