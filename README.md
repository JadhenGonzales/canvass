# canvass

Video Demo:
https://cs50.harvard.edu/x/2023/

## Description

Canvass is a firefox extension that helps you "canvass" costs for specific item across multiple websites. Through canvass, store pages and prices are saved and viewable as long as your current session is not terminated. You can also export your data to a csv file.

## Future Implementation

My plans for this extension includes automatically reading data from your current webpage (currently it only reads the URL you are currently in), importing from csv files, and automatically searching for your item across webpages you have saved (although at the moment I have no idea how to implement this last idea).

These are functionalities that I initially planned to be included in my submisssion but as I studied creating an extension, these features proved to be difficult for me.

## Extension Scripts

### Popup HTML index.html

The popup HTML contains 2 main divisions. The form for adding data about the item, store, cost, and URL, and a table showing all previously saved data. Only one of the two is shown at any given moment (the form is initially visible) and toggling between the two is done using a button with a script. The HTML is designed using bootstrap. At the moment, bootrap css is linked, but in the future the extension will have its own CSS file. 

### Popup Script index.js

This is where the bulk of the script is. I chose to place most of my code in the popup script to make sure that the extension does not consume a lot of resources when not in use. The only reason I have the background script is to store the data from the form since the popup script is reset every time the popup is reopened. 

Upon filling the form and clicking the save button, the function saveItem is called. This creates a list containing the item name, store price, remarks, and URL in that order before passing it to the background script. I initially used objects for this but later changed it to a list for easier iteration when populating the table of previously saved data.

The changePopup function toggles whichl of the form and the table is currenty visible to the user. Also, when the table is visible, it sends a message to the background script asking for the data stored. Upon recieving a response, it populates the table. The table is populated by creating rows. These rows each have a script attached to them that changes their color when hovered and copies the URL of the certain store when left clicked. 

The fillName and fillURL functions automatically fills parts of the form fields. The name is retrieved from the background script and the URL is retrieved using a query on the current active window and tab.

### Background Script background.js

The background script is mainly concerned on storing data it recieved from the popup script. Data is stored in a list, so you essentially have a list of lists. 

One thing to note is that when the popup script is asking for the name of the product to autofill, the background script responds with the name of the first item on the list of `list[0][0]`. This is done because the extension is designed to be used for gathering prices for the same item across multiple websites. 