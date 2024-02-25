
(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {greeting: "location"});
    if(response.farewell.startsWith("https://animationdigitalnetwork.fr/video/")) {
        document.getElementById("lds-ring").style.display = "none";    
        document.getElementById("switch").style.display = "block";
        
        (async () => {
            const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
            const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
            document.getElementById("checkbox").checked = response.farewell == "true";
          })();
        
        document.getElementById("checkbox").addEventListener("change", function() {
            (async () => {
                const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
                const response = await chrome.tabs.sendMessage(tab.id, {greeting: "change"});
              })();
        })
    }
})();