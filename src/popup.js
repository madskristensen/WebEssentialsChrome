let list = document.getElementById("list");
let bgp = chrome.extension.getBackgroundPage();

function showList(extensions) {

  for (let i = 0; i < extensions.length; i++) {

    let items = extensions[i].menu;

    let header = document.createElement("h2");
    header.innerHTML = items.displayText || extensions[i].name;
    header.className = "header";
    list.appendChild(header);

    let ul = document.createElement("ul");
    list.appendChild(ul);

    for (var item in items) {
      if (item === "displayText")
        continue;

      let li = document.createElement("li");
      let a = document.createElement("a");
      a.innerHTML = item;
      a.href = "#";
      a["data-callback"] = items[item];
      a.onclick = function () { execute(extensions[i].name, this["data-callback"]); };

      li.appendChild(a);
      ul.appendChild(li);
    }
  }
}

function execute(extName, method) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { code: `__bl_execute('${extName}', '${method}')`, runAt: "document_end" }, function (response) { });
    window.close();
  });
}

chrome.tabs.getSelected(null, function (tab) {
  showList(bgp.data[tab.id]);
});