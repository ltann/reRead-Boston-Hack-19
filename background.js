console.log("background script ran");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tabs) {// 'tab' is an object with information about the current open tab. Increment the phase or resets it back to 0.
    chrome.tabs.sendMessage(tabs.id, 'hello');//send message from background script to content script
}





