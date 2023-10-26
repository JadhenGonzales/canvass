# canvass

## Description

Canvass is a firefox extension that helps you "canvass" costs for specific item across multiple websites. The idea for canvass came to me while browsing for boardgames. Most of the time I keep multiple tabs open, checking all the sites that are near/deliver to my area. Through canvass, store pages and prices are saved and viewable as long as your current session is not terminated. You can also export your data to a csv file.

## Future Implementation

My plans for this extension includes automatically reading data from your current webpage (currently it only reads the URL you are currently in), importing from csv files, and automatically searching for your item across webpages you have saved (although at the moment I have no idea how to implement this last idea).

These are functionalities that I initially planned to be included in my submisssion but as I studied creating an extension, these features proved to be difficult for me.

## Extension Scripts

### Popup HTML index.html

The popup HTML contains 2 main divisions. The form for adding data about the item, store, cost, and URL, and a table showing all previously saved data. Only one of the two is shown at any given moment and toggling between the two is done using a button with a script. The HTML is designed using bootstrap. At the moment, bootrap css is linked, but in the future the extension will have its own CSS file. 

### Popup Script index.js

This is where the bulk of the script is. I chose to place most of my code in the popup script to make sure that the extension does not consume a lot of resources when not in use. The only reason I have the background script is to store the data from the form since the popup script is reset every time the popup is reopened. 
