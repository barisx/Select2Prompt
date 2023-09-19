function rejectChromeTab(tab) {
  // Only allow script injection on pages with URLs matching 'https://chat.openai.com/*'
  if (!tab.hasOwnProperty("url")) return true;
  if (!tab.url.startsWith('https://chat.openai.com/')) return true;
  return false;
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (rejectChromeTab(tab)) return;

    chrome.scripting.executeScript({
      target: { tabId: activeInfo.tabId },
      files: ['contentScript.js']
    });
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (rejectChromeTab(tab)) return;

  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['contentScript.js']
  });
});
