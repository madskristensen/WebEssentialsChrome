var data = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "extensionlist" && request.data.length > 0) {

    chrome.tabs.getSelected(null, function (tab) {
      data[tab.id] = request.data
      chrome.pageAction.show(tab.id);
    });
  }
});