chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      function: transferSelectedTextToTextarea,
    });
  });
  
  function transferSelectedTextToTextarea() {
    // The content script function will be injected here
  }
  