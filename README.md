# Web Essentials browser extension

[![Build status](https://ci.appveyor.com/api/projects/status/37jsbyfsv5edx481?svg=true)](https://ci.appveyor.com/project/madskristensen/webessentialschrome)

## Download and install 
- [Google Chrome](https://chrome.google.com/webstore/detail/web-essentials/mghdcdlpcdiodelbplncnodiiadljhhk)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/webessentials/)
- [Opera](https://addons.opera.com/en/extensions/details/web-essentials/)

Exposes Browser Link functionality directly from the Google Chrome toolbar or Firefox address bar.

### Chrome

![screenshot](art/screenshot.png)

### Firefox

![Screenshot Firefox](art/screenshot-firefox.png)

## Supported Visual Studio extension

- [Browser Link Inspector 2017](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BrowserLinkInspector2017)
- [Browser Sync](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BrowserSync)
- [W3C Validator](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.W3CValidator)
- [Web Accessibility Checker](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebAccessibilityChecker)

## Developer notes
Enable Chrome's extension developer mode and add the `src` path as a new extension. Then load the `test/testpage.html` in the browser.

Use this [test page](https://cdn.rawgit.com/madskristensen/WebEssentialsChrome/39e0422e/test/testpage.html) to simulate Visual Studio running with an active Browser Link connection.