function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}

if (document.getElementById("__browserLink_initializationData")) {
  injectScript(chrome.extension.getURL('page.js'), 'body');

  window.addEventListener("message", function (event) {
    if (event.data.type === "__bl_extensionlist") {
      var data = JSON.parse(event.data.extensionlist);
      chrome.runtime.sendMessage({ type: "extensionlist", data: data }, function (response) { });
    }
  });
}

function __bl_execute(callback) {
  // Send a postMessage that page.js can intercept
  window.postMessage({ type: "__bl_execute", callback: callback }, "*");
}