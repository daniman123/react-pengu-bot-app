const injectApp = () => {
	const appDiv = document.createElement("div");
	appDiv.id = "my-react-app";
	document.body.appendChild(appDiv);

	const script = document.createElement("script");
	// eslint-disable-next-line no-undef
	script.src = chrome.runtime.getURL("build/static/js/main.0b2124c5.js"); // Adjust the path as per your build files
	script.onload = () => script.remove();
	(document.head || document.documentElement).appendChild(script);
};

const loadCSS = (href) => {
	const link = document.createElement("link");
	// eslint-disable-next-line no-undef
	link.href = chrome.runtime.getURL(href);
	link.type = "text/css";
	link.rel = "stylesheet";
	document.head.appendChild(link);
};

loadCSS("build/static/css/main.de24fe38.css"); // Update the path based on your build output

injectApp();
