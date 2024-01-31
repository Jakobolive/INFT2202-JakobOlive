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
let contactUsList = document.getElementById("contactUsList");
let humanResourcesList = document.createElement("li");
let humanResourcesText = document.createElement("a");
//let humanResourcesIcon = document.createElement("i");

// Creating text nodes and adding elements and classes to the future tags.
let humanResourcesTextNode = document.createTextNode("Human Resources");
humanResourcesText.appendChild(humanResourcesTextNode);

//humanResourcesText.appendChild(humanResourcesIcon);
humanResourcesText.href = "./HumanResourcesPage.html";
humanResourcesList.classList.add("nav-item");
humanResourcesText.classList.add("nav-link");

// Appending the tags together and then inserting them into the nav bar.
humanResourcesList.appendChild(humanResourcesText);
//humanResourcesIcon.innerHTML = '<i class="fa-regular fa-user"></i>';
topNavBar.insertBefore(humanResourcesList, contactUsList);

// Grabbing the footer div and creating the elements needed for the fixed bottom nav bar.
let footerNavString = "Copyright 2024, Jakob Olive";
let footerDiv = document.getElementById("footer");
let bottomNavBar = document.createElement("nav");
let bottomNavBarText = document.createElement("a");
let bottomNavBarTextNode = document.createTextNode(footerNavString)

// Adding classes, appending together, and then appending to footer.
bottomNavBar.classList.add("navbar", "fixed-bottom", "navbar-expand-lg", "bg-body-tertiary");
bottomNavBar.style.textAlign = "center";
bottomNavBar.style.backgroundColor = "#ffa046";
bottomNavBarText.classList.add("navbar-brand");
bottomNavBarText.appendChild(bottomNavBarTextNode);
bottomNavBar.appendChild(bottomNavBarText);
footerDiv.appendChild(bottomNavBar);

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
    let homePageHeaderText = document.createTextNode(homePageHeaderString);
    let homePageParagraphText = document.createTextNode(homePageParagraphString);
    // Appending the nodes together and then onto the homePage variable, the actual page.
    homePageHeaderElement.appendChild(homePageHeaderText);
    homePageParagraphElement.appendChild(homePageParagraphText);
    content.appendChild(homePageHeaderElement);
    content.appendChild(homePageParagraphElement);
}

// This section checks for the body id of productPage and populates the ProductPage.html appropriately.
if (document.getElementById("productPage")){
    // Define the strings needed for the h1, h2, and p tags.
    let mainHeaderString = "Placeholder for the interests page.";
    let mainParagraphString = "Placeholder for the p tag of the interests page.";
    let firstHeaderString = "Placeholder for the first interest header.";
    let firstParagraphString = "Placeholder for the first p tag.";
    let secondHeaderString = "Placeholder for the second header.";
    let secondParagraphString = "Placeholder for the second p tag.";
    let thirdHeaderString = "Placeholder for the third header.";
    let thirdParagraphString = "Placeholder for the third p tag.";

    // Creating required elements and text nodes to hold the page contents.
    let interestsPageHeaderElement = document.createElement("h1");
    let interestsPageParagraphElement = document.createElement("p");
    let firstInterestPictureElement = document.createElement("img");
    let firstInterestHeaderElement = document.createElement("h2");
    let firstInterestParagraphElement = document.createElement("p");
    let secondInterestPictureElement = document.createElement("img");
    let secondInterestHeaderElement = document.createElement("h2");
    let secondInterestParagraphElement = document.createElement("p");
    let thirdInterestPictureElement = document.createElement("img");
    let thirdInterestHeaderElement = document.createElement("h2");
    let thirdInterestParagraphElement = document.createElement("p");

    let interestsPageHeaderText = document.createTextNode(mainHeaderString);
    let interestsPageParagraphText = document.createTextNode(mainParagraphString);
    let firstInterestHeaderText = document.createTextNode(firstHeaderString);
    let firstInterestParagraphText = document.createTextNode(firstParagraphString);
    let secondInterestHeaderText = document.createTextNode(secondHeaderString);
    let secondInterestParagraphText = document.createTextNode(secondParagraphString);
    let thirdInterestHeaderText = document.createTextNode(thirdHeaderString);
    let thirdInterestParagraphText = document.createTextNode(thirdParagraphString);

    // Appending all nodes and elements together and then onto the content variable.
    interestsPageHeaderElement.appendChild(interestsPageHeaderText);
    interestsPageParagraphElement.appendChild(interestsPageParagraphText);
    firstInterestHeaderElement.appendChild(firstInterestHeaderText);
    firstInterestParagraphElement.appendChild(firstInterestParagraphText);
    secondInterestHeaderElement.appendChild(secondInterestHeaderText);
    secondInterestParagraphElement.appendChild(secondInterestParagraphText);
    thirdInterestHeaderElement.appendChild(thirdInterestHeaderText);
    thirdInterestParagraphElement.appendChild(thirdInterestParagraphText);

    content.appendChild(interestsPageHeaderElement);
    content.appendChild(interestsPageParagraphElement);
    content.appendChild(firstInterestPictureElement);
    content.appendChild(firstInterestHeaderElement);
    content.appendChild(firstInterestParagraphElement);
    content.appendChild(secondInterestPictureElement);
    content.appendChild(secondInterestHeaderElement);
    content.appendChild(secondInterestParagraphElement);
    content.appendChild(thirdInterestPictureElement);
    content.appendChild(thirdInterestHeaderElement);
    content.appendChild(thirdInterestParagraphElement);
}

// This section checks for the body id of servicesPage and populates the ServicesPage.html appropriately.
if (document.getElementById("servicesPage")){
    // Define the strings needed for the h1, h2, and p tags.
    let mainHeaderString = "Placeholder for the interests page.";
    let mainParagraphString = "Placeholder for the p tag of the interests page.";
    let firstHeaderString = "Placeholder for the first interest header.";
    let firstParagraphString = "Placeholder for the first p tag.";
    let secondHeaderString = "Placeholder for the second header.";
    let secondParagraphString = "Placeholder for the second p tag.";
    let thirdHeaderString = "Placeholder for the third header.";
    let thirdParagraphString = "Placeholder for the third p tag.";

    // Creating required elements and text nodes to hold the page contents.
    let servicePageHeaderElement = document.createElement("h1");
    let servicePageParagraphElement = document.createElement("p");
    let firstServicePictureElement = document.createElement("img");
    let firstServiceHeaderElement = document.createElement("h2");
    let firstServiceParagraphElement = document.createElement("p");
    let secondServicePictureElement = document.createElement("img");
    let secondServiceHeaderElement = document.createElement("h2");
    let secondServiceParagraphElement = document.createElement("p");
    let thirdServicePictureElement = document.createElement("img");
    let thirdServiceHeaderElement = document.createElement("h2");
    let thirdServiceParagraphElement = document.createElement("p");

    let servicePageHeaderText = document.createTextNode(mainHeaderString);
    let servicePageParagraphText = document.createTextNode(mainParagraphString);
    let firstServiceHeaderText = document.createTextNode(firstHeaderString);
    let firstServiceParagraphText = document.createTextNode(firstParagraphString);
    let secondServiceHeaderText = document.createTextNode(secondHeaderString);
    let secondServiceParagraphText = document.createTextNode(secondParagraphString);
    let thirdServiceHeaderText = document.createTextNode(thirdHeaderString);
    let thirdServiceParagraphText = document.createTextNode(thirdParagraphString);

    // Appending all nodes and elements together and then onto the content variable.
    servicePageHeaderElement.appendChild(servicePageHeaderText);
    servicePageParagraphElement.appendChild(servicePageParagraphText);
    firstServiceHeaderElement.appendChild(firstServiceHeaderText);
    firstServiceParagraphElement.appendChild(firstServiceParagraphText);
    secondServiceHeaderElement.appendChild(secondServiceHeaderText);
    secondServiceParagraphElement.appendChild(secondServiceParagraphText);
    thirdServiceHeaderElement.appendChild(thirdServiceHeaderText);
    thirdServiceParagraphElement.appendChild(thirdServiceParagraphText);

    content.appendChild(servicePageHeaderElement);
    content.appendChild(servicePageParagraphElement);
    content.appendChild(firstServicePictureElement);
    content.appendChild(firstServiceHeaderElement);
    content.appendChild(firstServiceParagraphElement);
    content.appendChild(secondServicePictureElement);
    content.appendChild(secondServiceHeaderElement);
    content.appendChild(secondServiceParagraphElement);
    content.appendChild(thirdServicePictureElement);
    content.appendChild(thirdServiceHeaderElement);
    content.appendChild(thirdServiceParagraphElement);
}

// This section checks for the body id of aboutUsePage and populates the AboutUsPage.html appropriately.
if (document.getElementById("aboutUsPage")){
    // Define the strings needed for the h1, h2, and p tags.
    let mainHeaderString = "Placeholder for the interests page.";
    let mainParagraphString = "Placeholder for the p tag of the interests page.";

    // Creating required elements and text nodes to hold the page contents.
    let aboutUsPagePictureElement = document.createElement("img");
    let aboutUsPageHeaderElement = document.createElement("h1");
    let aboutUsPageParagraphElement = document.createElement("p");

    let aboutUsPageHeaderText = document.createTextNode(mainHeaderString);
    let aboutUsPageParagraphText = document.createTextNode(mainParagraphString);

    // Appending all nodes and elements together and then onto the content variable.
    aboutUsPageHeaderElement.appendChild(aboutUsPageHeaderText);
    aboutUsPageParagraphElement.appendChild(aboutUsPageParagraphText);
    content.appendChild(aboutUsPagePictureElement);
    content.appendChild(aboutUsPageHeaderElement);
    content.appendChild(aboutUsPageParagraphElement);
}

// This section checks for the body id of contactUs and populates the ContactUsPage.html appropriately.
if (document.getElementById("contactUsPage")){

}

// This section checks for the body id of humanResourcesPage and populates the HumanResourcesPage.html appropriately.
if (document.getElementById("humanResourcesPage")){

}