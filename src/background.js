var data = {};

chrome.tabs.onUpdated.addListener(function (id, info, tab) {
  setTimeout(function () {
  if (data[tab.id])
      chrome.pageAction.show(tab.id);
  }, 1000);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "extensionlist" && request.data.length > 0) {

    chrome.tabs.getSelected(null, function (tab) {
      data[tab.id] = request.data;
      chrome.tabs.update(tab.id, {}, function () { });
    });
  }
});