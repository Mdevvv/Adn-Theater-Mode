var keyName = "Adn-Theater-Mode";

var styleTagId = "customStylesAdnTheaterMode";

// Function to detect URL changes
function onUrlChange() {
    if(window.location.href.startsWith("https://animationdigitalnetwork.fr/video/")  && localStorage.getItem(keyName) == "true") {
        console.log("URL changed to:", window.location.href);
        changeCSS();
    }
    else {
        backCSS();
    }
    
}

// Initial URL
let currentUrl = window.location.href;

// Create a mutation observer to detect changes in the <title> element
const observer = new MutationObserver(mutations => {
mutations.forEach(mutation => {
    if (currentUrl !== window.location.href) {
    currentUrl = window.location.href;
    onUrlChange();
    }
});
});

// Start observing the document title
observer.observe(document, {
childList: true,
subtree: true
});


if(localStorage.getItem(keyName) === null) {
    localStorage.setItem(keyName, false);
}

if(localStorage.getItem(keyName) == "true") {
    changeCSS();
}

function changeCSS() {
    
        var styleTag = document.createElement('style');
        
        styleTag.id = styleTagId;

        styleTag.innerHTML = ".lhIdsr { position: absolute !important; }";
        styleTag.innerHTML += ".blomsM { width: 140% !important; }";
        styleTag.innerHTML += ".eBWHrE { width: 90% !important; }";
        styleTag.innerHTML += ".gYcEtV { width: 120% !important; }";
    
        document.head.appendChild(styleTag);
}

function backCSS() {
    var styleTag = document.getElementById(styleTagId);
    if (styleTag) {
        styleTag.parentNode.removeChild(styleTag);
    }
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    //   console.log(sender.tab ?
    //               "from a content script:" + sender.tab.url :
    //               "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: localStorage.getItem(keyName)});
      else if (request.greeting === "change") {
        localStorage.setItem(keyName, localStorage.getItem(keyName) == "true" ? "false" : "true");
        sendResponse({farewell: "changed"});
        onUrlChange();
      }

      else if (request.greeting === "location")
        sendResponse({farewell: location.href});
    }
  );