var data = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "extensionlist" && request.data.length > 0) {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            data[tabs[0].id] = request.data
            chrome.pageAction.show(tabs[0].id);
        });
    }
});