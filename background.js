function handleMessages(message, sender, sendResponse) {
    // Handles different messages sent by the popup script and runs respective functions
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
    // Store data to items array
    items.push(data);
    return "Saved!!!";
}

function exportCSV() {
    // Exports data stored in "items" array to a csv file
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

// Initialize items array and run message listener
let items = [
];
browser.runtime.onMessage.addListener(handleMessages);