const fs = require('fs');
const path = require('path');

const contentScriptPath = 'contentScripts/injectReactApp.js';
let contentScript = fs.readFileSync(contentScriptPath, 'utf8');

// Regex patterns to match the file names
const jsFileNamePattern = /build\/static\/js\/main\.[0-9a-f]+\.js/;
const cssFileNamePattern = /build\/static\/css\/main\.[0-9a-f]+\.css/;

// Update JS file path
const jsDirectoryPath = path.join(__dirname, 'build/static/js');
const jsFiles = fs.readdirSync(jsDirectoryPath);
const jsFile = jsFiles.find(file => file.startsWith('main') && file.endsWith('.js'));
if (jsFile) {
    contentScript = contentScript.replace(jsFileNamePattern, `build/static/js/${jsFile}`);
}

// Update CSS file path
const cssDirectoryPath = path.join(__dirname, 'build/static/css');
const cssFiles = fs.readdirSync(cssDirectoryPath);
const cssFile = cssFiles.find(file => file.startsWith('main') && file.endsWith('.css'));
if (cssFile) {
    contentScript = contentScript.replace(cssFileNamePattern, `build/static/css/${cssFile}`);
}

fs.writeFileSync(contentScriptPath, contentScript);
