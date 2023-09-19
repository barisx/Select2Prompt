function rejectChromeTab(tab) {
  // skip urls like "chrome://" to avoid extension error
if (tab.url?.startsWith("chrome://")) return undefined;
}

chrome.tabs.onActivated.addListener((tabId, changeInfo, tab) => {
  rejectChromeTab(tab);
  console.log(tab.url)
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['contentScript.js']
    });
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  rejectChromeTab(tab);
  console.log(tab.url)

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['contentScript.js']
    });
});


