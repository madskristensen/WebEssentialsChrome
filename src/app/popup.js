
function GetBrowser() {
    try {
        if (browser.runtime)
            return browser;
    } catch (e) {
        return chrome;
    }
}

let list = document.getElementById("list");
let bgp = GetBrowser().extension.getBackgroundPage();

function showList(extensions) {

    for (let i = 0; i < extensions.length; i++) {

        let items = extensions[i].menu;

        let header = getHeader(items, list);

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

function getHeader(items, list) {

    var header = list.querySelector("h2[data-name='" + items.displayText + "']");
    if (!header) {
        header = document.createElement("h2");
        header.innerHTML = items.displayText;
        header.className = "header";
        header.setAttribute("data-name", items.displayText);
        list.appendChild(header);
    }

    return header;
}

function execute(extName, method) {
    GetBrowser().tabs.query({ active: true, currentWindow: true }, function (tabs) {
        GetBrowser().tabs.executeScript(tabs[0].id, { code: `__bl_execute('${extName}', '${method}')`, runAt: "document_end" }, function (response) { });
        window.close();
    });
}

GetBrowser().tabs.query({ currentWindow: true, active: true }, function (tabs) {
    showList(bgp.data[tabs[0].id]);
});
