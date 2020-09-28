chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript({

        code: "console.log('TEST')"

    });

});

// document.getElementsByTagName("BODY")[0].style.background = "red";