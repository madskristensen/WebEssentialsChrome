// Check if the Browser Link script tag exist on the page

if (document.getElementById("__browserLink_initializationData")) {
  var script = document.createElement('script');
  script.setAttribute('src', chrome.extension.getURL('page.js'));
  document.body.appendChild(script);

  window.addEventListener("message", function (event) {
    if (event.data.type === "__bl_extensionlist") {
      var data = JSON.parse(event.data.extensionlist);
      chrome.runtime.sendMessage({ type: "extensionlist", data: data }, function (response) { });
    }
  });
}

function __bl_execute(extName, method) {
  // Send a postMessage that page.js can intercept
  window.postMessage({ type: "__bl_execute", extName: extName, method: method }, "*");
}