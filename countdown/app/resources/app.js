const indexController = class {
  registerSvcWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }
}

// main loop
document.addEventListener("DOMContentLoaded", function(event) {
  //do work
});