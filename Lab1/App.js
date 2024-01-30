/*
    Name: Jakob Olive
    Date: 2024-01-28
    Course: INFT 2202
    File: App.js
    File Desc: This is the main file that populates and operates the app. This page using DOM manipulation to check which page is which, and
        populate the page with the appropriate data. This file will also create a nav bar at the bottom of the page as requested in the 
        assignment document as well as ...
*/

/*
    Section that will change the current html top navbar on all pages, changing the product link to interests, adding the human resources link,
    as well as compiling the footer navbar.
*/

// Use innerHTML to alter the text on the a tag of the product nav bar.
document.getElementById("product").innerHTML = "Interests";

// Grab the ul tag from the top navbar to inject the human resources link, as well as creating the li tag and the a tag.
let topNavBar = document.getElementById("nav_list");
let contactUsList = document.getElementById("contactUsList")
let humanResourcesList = document.createElement("li");
let humanResourcesText = document.createElement("a");
// Creating text nodes and adding elements and classes to the future tags.
let humanResourcesTextNode = document.createTextNode("Human Resources");
humanResourcesText.appendChild(humanResourcesTextNode);
humanResourcesText.href = "./HumanResourcesPage.html";
humanResourcesList.classList.add("nav-item");
humanResourcesText.classList.add("nav-link");
// Appending the tags together and then inserting them into the nav bar.
humanResourcesList.appendChild(humanResourcesText);
topNavBar.insertBefore(humanResourcesList, contactUsList);

/*
    Section that will check the id on each page body using an if else statement and populating the html page using DOM manipulation
    as requested in the assignment. This block will create strings that will hold the text for each future tag, create the tag and text nodes,
    as well as set them into the proper position on the page content division defined in the html pages.  
*/

// Grabbing the page content div to append to.
var content = document.getElementById("content");

// This section checks for the body id of homePage and populates the HomePage.html appropriately.
if (document.getElementById("homePage")){
    // Defining the strings wanted for the tags.
    let homePageHeaderString = "Welcome To The Jungle";
    let homePageParagraphString = "This is going into the homepage, will add to later.";

    // Creating elements and text nodes for both the header and the paragraph.
    let homePageHeaderElement = document.createElement("h1");
    let homePageParagraphElement = document.createElement("p");
    let homePageHeaderTextNode = document.createTextNode(homePageHeaderString);
    let homePageParagraphTextNode = document.createTextNode(homePageParagraphString);
    // Appending the nodes together and then onto the homePage variable, the actual page.
    homePageHeaderElement.appendChild(homePageHeaderTextNode);
    homePageParagraphElement.appendChild(homePageParagraphTextNode);
    content.appendChild(homePageHeaderElement);
    content.appendChild(homePageParagraphElement);
}

// This section checks for the body id of productPage and populates the ProductPage.html appropriately.
if (document.getElementById("productPage")){

}

// This section checks for the body id of servicesPage and populates the ServicesPage.html appropriately.
if (document.getElementById("servicesPage")){

}

// This section checks for the body id of aboutUsePage and populates the AboutUsPage.html appropriately.
if (document.getElementById("aboutUsPage")){

}

// This section checks for the body id of contactUs and populates the ContactUsPage.html appropriately.
if (document.getElementById("contactUsPage")){

}

// This section checks for the body id of humanResourcesPage and populates the HumanResourcesPage.html appropriately.
if (document.getElementById("humanResourcesPage")){

}