/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {

  chrome.app.window.create(
    "window.html",
    {
		id: "mainWindow",
		state: "fullscreen",
		frame: "none"
    }
  );

  console.log('background.js');
  // chrome.accessibilityFeatures.virtualKeyboard.set(true);
  chrome.accessibilityFeatures.virtualKeyboard.get({'incognito': false});
  console.log(chrome.accessibilityFeatures.virtualKeyboard.get({'incognito': false}));
});
