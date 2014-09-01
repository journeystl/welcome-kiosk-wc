window.onload = function() {
  // http://thejourney.org/?mobileapp
  var webview = document.getElementById("kiosk");
  
  function clickMe() {
    alert('clickMe test');
    webview.src('http://google.com');
  }
};



