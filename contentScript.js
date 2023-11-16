const injectApp = () => {
	const appDiv = document.createElement("div");
	appDiv.id = "my-react-app";
	document.body.appendChild(appDiv);

	const script = document.createElement("script");
	// eslint-disable-next-line no-undef
	script.src = chrome.runtime.getURL("build/static/js/main.5146bc9a.js");
	script.onload = () => script.remove();
	(document.head || document.documentElement).appendChild(script);
};

const loadCSS = (href) => {
	const link = document.createElement("link");
	// eslint-disable-next-line no-undef
	link.href = chrome.runtime.getURL("build/static/css/main.46d4ee86.css");
	link.type = "text/css";
	link.rel = "stylesheet";
	document.head.appendChild(link);
};

loadCSS(); // No argument needed here now
injectApp();
