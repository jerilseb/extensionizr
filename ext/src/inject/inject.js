chrome.extension.sendMessage({}, message => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      main();
    }
  }, 100);
});

function main() {
  console.log("Hello. This message was sent from scripts/inject.js");
}
