window.onload = function() {
  // http://thejourney.org/?mobileapp
};

function clickMe() {
  var webview = document.getElementById("kiosk");
  webview.src('http://apple.com');
}


document.querySelector("#clickMe").onclick = clickMe;