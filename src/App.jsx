// import PrimaryLayout from "./components/layout/primaryLayout/PrimaryLayout";

import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.addEventListener("click", function (event) {
			// Send a message to the background script
			console.log("keys to tha bimmer");
			// eslint-disable-next-line no-undef
			// chrome.runtime.sendMessage("bbbgmlodlbfklpcpphnbpbfgbefhmjjp", {
			// 	type: "clickEvent",
			// 	content: "Click detected",
			// });

			
		});
	}, []);

	return (
		<></>
		// <div className="h-full w-full">
		// 	<PrimaryLayout />
		// </div>
	);
}

export default App;
