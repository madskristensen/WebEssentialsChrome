var data = {};

function sendMessage(extObject, request) {
    if (request.type === "extensionlist" && request.data.length > 0) {

        extObject.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            data[tabs[0].id] = request.data;
            extObject.pageAction.show(tabs[0].id);
        });
    }
}

if (chrome.runtime) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        sendMessage(chrome, request);
    });
}
else if (browser.runtime) {
    browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        sendMessage(browser, request);
    });
}