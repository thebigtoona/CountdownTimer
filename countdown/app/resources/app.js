// main loop
document.addEventListener("DOMContentLoaded", function(event) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});