var appStart = function() {
	// console.log("fullscreen goes here...")
	// chrome.app.window.current().fullscreen;

		
	var keyboard = ChromeSetting.get(chrome.accessibilityFeatures.virtualKeyboard);
	console.log("keyboard: " + keyboard);

	ChromeSetting.set({chrome.accessibilityFeatures.virtualKeyboard: true});
}

$(document).ready(appStart);