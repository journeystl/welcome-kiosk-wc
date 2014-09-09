var appStart = function appStart() {

    ChromeSetting.set({chrome.accessibilityFeatures.virtualKeyboard: true});
}

$(document).ready(appStart);