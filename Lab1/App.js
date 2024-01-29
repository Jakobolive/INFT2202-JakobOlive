/*
    Name: Jakob Olive
    Date: 2024-01-28
    Course: INFT 2202
    File: App.js
    File Desc: ...
*/
/*
    Section that will define strings, create elements, and use DOM manipulation to populate the HomePage.html page.  
*/
// Defining the strings wanted for the tags.
let homeHeaderString = "Welcome To The Jungle";
let homeTextString = "This is going into the homepage, will add to later.";
// Grabbing the home page div to append to.
var homePage = document.getElementById("homePage");
// Creating elements and text nodes for both the header and the paragraph.
let homeHeaderElement = document.createElement("h1");
let homeTextElement = document.createElement("p");
let homeHeaderNode = document.createTextNode(homeHeaderString);
let homeTextNode = document.createTextNode(homeTextString);
// Appending the nodes together and then onto the homePage variable, the actual page.
homeHeaderElement.appendChild(homeHeaderNode);
homeTextElement.appendChild(homeTextNode);
homePage.appendChild(homeHeaderElement);
homePage.appendChild(homeTextElement);