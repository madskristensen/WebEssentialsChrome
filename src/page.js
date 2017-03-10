setTimeout(function () {
  var extensions = [];

  for (var ext in browserLink.extensions) {
    if (browserLink.extensions[ext].menu)
      extensions.push(browserLink.extensions[ext]);
  }

  window.postMessage({ type: "__bl_extensionlist", extensionlist: JSON.stringify(extensions) }, "*");
}, 200);

window.addEventListener("message", function (event) {
  if (event.data.type === "__bl_execute") {
    eval(event.data.callback);
  }
});