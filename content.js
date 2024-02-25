var keyName = "Adn-Theater-Mode";

if(localStorage.getItem(keyName) === null) {
    localStorage.setItem(keyName, false);
}


if(localStorage.getItem(keyName) == "true") {
    var styleTag = document.createElement('style');
    
    styleTag.innerHTML = ".lhIdsr { position: absolute !important; }";
    styleTag.innerHTML += ".blomsM { width: 140% !important; }";
    styleTag.innerHTML += ".eBWHrE { width: 90% !important; }";
    styleTag.innerHTML += ".gYcEtV { width: 120% !important; }";

    document.head.appendChild(styleTag);
}
console.log("CONTENT");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: localStorage.getItem(keyName)});
      else if (request.greeting === "change") {
        localStorage.setItem(keyName, localStorage.getItem(keyName) == "true" ? "false" : "true");
        sendResponse({farewell: "changed"});
        location.reload();
      }

      else if (request.greeting === "location")
        sendResponse({farewell: location.href});
    }
  );