(function () {
  var interval = setInterval(function () {

    if (!browserLink || (!browserLink.extensions["browserreloadonsave.reloadfactory"] && !browserLink.extensions["microsoft.visualstudio.web.pageinspector.package.refreshextensionfactory"]))
      return;

    var extensions = [];

    for (var ext in browserLink.extensions) {
      if (browserLink.extensions[ext].menu)
        extensions.push(browserLink.extensions[ext]);
    }

    window.postMessage({ type: "__bl_extensionlist", extensionlist: JSON.stringify(extensions) }, "*");
    clearInterval(interval);
  }, 25);

  window.addEventListener("message", function (event) {
    if (event.data.type !== "__bl_execute")
      return;

    try {
      browserLink.extensions[event.data.extName][event.data.method]();
    } catch (e) {
      console.log(`"${event.data.method}" is not exposed on the "${event.data.extName}" Browser Link extension.`);
    }
  });
})();