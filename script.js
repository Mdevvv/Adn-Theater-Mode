
(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    var goodURL = false
    try {
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "location"});
        goodURL = response.farewell.startsWith("https://animationdigitalnetwork.com")
    }
    catch(err) {
        
    }

    if(!goodURL) {
        document.getElementById("errMsg").style.display = "block";
        document.getElementById("switch").style.display = "none";
        document.getElementById("lds-ring").style.display = "none";
    }

    else {  
        document.getElementById("switch").style.display = "block";
        document.getElementById("lds-ring").style.display = "none";
        
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