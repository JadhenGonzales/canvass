function handleMessages(message, sender, sendResponse) {
    if (message.type == "add_data") {
        sendResponse(addData(message.content));
    }

    if (message.type == "retrieve_data") {
        sendResponse(items);
    }

    if (message.type == "exportCSV") {
        exportCSV();
    }

    if (message.type == "retrieve_name") {
        if (items[0]) {
            sendResponse(items[0][0]);
        } else {
        sendResponse("empty");
        }
    }
}

function addData(data) {
    items.push(data);
    return "Saved!!!";
}

function exportCSV() {
    console.log("Writing CSV")
    let csv = "name,store,price,remarks\n";
    csv += items.map(row => row.join(',')).join('\n');
    
    const csv_file = new Blob([csv], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csv_file);
    browser.downloads.download({
        url: csvURL,
        filename: "pricelist.csv",
        conflictAction: "uniquify",
        saveAs: true,
    });
}

let items = [
];

browser.runtime.onMessage.addListener(handleMessages);