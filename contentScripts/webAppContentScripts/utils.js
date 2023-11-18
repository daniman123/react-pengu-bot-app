export function simulateClick(element) {
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
