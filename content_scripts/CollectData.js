function handleMessages(message, sender, sendResponse) {
    if (message.type == "autofill") {
        document.body.innerHTML = "test";
        sendResponse("test2");
    }
}

browser.runtime.onMessage.addListener(handleMessages);
