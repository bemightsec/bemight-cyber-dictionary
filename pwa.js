if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("BeMight Cyber Dictionary service worker registered.");
      })
      .catch(error => {
        console.log("Service worker registration failed:", error);
      });
  });
}
