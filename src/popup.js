(function () {

  let list = document.getElementById("list");
  let bgp = chrome.extension.getBackgroundPage();

  function showList(extensions) {
    list.innerHTML = "";

    for (let i = 0; i < extensions.length; i++) {

      let menus = extensions[i].menu;
      let items = menus;

      for (var item in items) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = item;
        a.href = "#";
        a["data-callback"] = items[item];
        a.onclick = function () { execute(`eval(browserLink.extensions["${extensions[i].name}"].${this["data-callback"]})`); };

        li.appendChild(a);
        list.appendChild(li);
      }
    }
  }

  function execute(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: `__bl_execute('${callback}')`, runAt: "document_end" }, function (response) { });
    });
  }

  chrome.tabs.getSelected(null, function (tab) {
    showList(bgp.data[tab.id]);
  });

})();

