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
topNavBar.insertBefore(humanResourcesList, contactUsList);

// Grabbing the footer div and creating the elements needed for the fixed bottom nav bar.
let footerNavString = "Copyright 2024, Jakob Olive";
let footerDiv = document.getElementById("footer");
let containerDiv = document.createElement("div");
let bottomNavBar = document.createElement("nav");
let bottomNavBarText = document.createElement("p");
let bottomNavBarTextNode = document.createTextNode(footerNavString)


// Adding classes, appending together, and then appending to footer.
bottomNavBar.classList.add("navbar", "fixed-bottom", "navbar-expand-lg", "bg-body-tertiary", "footerNav");
bottomNavBar.style.backgroundColor = "transparent";
containerDiv.classList.add("container-fluid");
bottomNavBarText.classList.add("navbar-brand");
bottomNavBarText.appendChild(bottomNavBarTextNode);
bottomNavBar.appendChild(bottomNavBarText);
containerDiv.appendChild(bottomNavBar);
footerDiv.appendChild(containerDiv);

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

    // Defining the strings wanted for the tags.
    let contactUsHeaderString = "Welcome To The Jungle";
    let contactUsParagraphString = "This is going into the homepage, will add to later.";

    // Creating elements and text nodes for both the header and the paragraph.
    let contactUsHeaderElement = document.createElement("h1");
    let contactUsParagraphElement = document.createElement("p");
    let contactUsHeaderText = document.createTextNode(contactUsHeaderString);
    let contactUsParagraphText = document.createTextNode(contactUsParagraphString);
    // Appending the nodes together and then onto the homePage variable, the actual page.
    contactUsHeaderElement.appendChild(contactUsHeaderText);
    contactUsParagraphElement.appendChild(contactUsParagraphText);
    content.appendChild(contactUsHeaderElement);
    content.appendChild(contactUsParagraphElement);

    // Open the form element.
    let form = document.createElement("form");
    form.setAttribute("name", "form");
    
    // Create a list element to help format the form.
    let formLayout = document.createElement("ul");

    // Create input tags for the form element.
    let nameInput = document.createElement("input");
    let nameInputList = document.createElement("li");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "Name");
    nameInput.setAttribute("placeholder", "Name");
    let numberInput = document.createElement("input");
    let numberInputList = document.createElement("li");
    numberInput.setAttribute("id", "number");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("name", "phoneNumber");
    numberInput.setAttribute("placeholder", "Phone Number");
    let emailInput = document.createElement("input");
    let emailInputList = document.createElement("li");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("placeholder", "Email Address");
    let messageArea = document.createElement("textarea");
    let messageInputList = document.createElement("li");
    messageArea.setAttribute("id", "message");
    messageArea.setAttribute("name", "message");
    messageArea.setAttribute("rows", "10");
    messageArea.setAttribute("cols", "30");
    
    // Creating labels for the input tags.
    let nameLabel = document.createElement("label");
    let nameLabelList = document.createElement("li");
    let nameText = document.createTextNode("Name");
    nameLabel.setAttribute("for", "name");
    nameLabel.appendChild(nameText);
    let numberLabel = document.createElement("label");
    let numberLabelList = document.createElement("li");
    let numberText = document.createTextNode("Phone Number");
    numberLabel.setAttribute("for", "number");
    numberLabel.appendChild(numberText);
    let emailLabel = document.createElement("label");
    let emailLabelList = document.createElement("li");
    let emailText = document.createTextNode("Email");
    emailLabel.setAttribute("for", "email");
    emailLabel.appendChild(emailText);
    let messageLabel = document.createElement("label");
    let messageLabelList = document.createElement("li");
    let messageText = document.createTextNode("Message");
    messageLabel.setAttribute("for", "message");
    messageLabel.appendChild(messageText);

    // Append input elements to the list items and then to the form.
    nameLabelList.appendChild(nameLabel);
    nameInputList.appendChild(nameInput);
    numberLabelList.appendChild(numberLabel);
    numberInputList.appendChild(numberInput);
    emailLabelList.appendChild(emailLabel);
    emailInputList.appendChild(emailInput);
    messageLabelList.appendChild(messageLabel);
    messageInputList.appendChild(messageArea);

    formLayout.appendChild(nameLabelList);
    formLayout.appendChild(nameInputList);
    formLayout.appendChild(numberLabelList);
    formLayout.appendChild(numberInputList);
    formLayout.appendChild(emailLabelList);
    formLayout.appendChild(emailInputList);
    formLayout.appendChild(messageLabelList);
    formLayout.appendChild(messageInputList);
    
    // Append the listformat to the form.
    form.appendChild(formLayout);

    // Creating the submit button.
    let buttonLayout = document.createElement("ul");
    let submitButton = document.createElement("button");
    submitButton.classList.add("btn", "btn-light");
    let submitButtonText = document.createTextNode("Contact Us!");
    submitButton.appendChild(submitButtonText);
    let submitList = document.createElement("li");
    submitButton.setAttribute("id", "submit");

    submitList.appendChild(submitButton);
    buttonLayout.appendChild(submitList);
    // Append the form to the page.
    content.appendChild(form);
    content.appendChild(buttonLayout);

    // Adding an on click event listener to the button and creating function to display form contents in console, redirect to the home page.
    document.getElementById("submit").addEventListener("click", displayAndRedirect);

    // Function to get the code to wait for a certain time in milliseconds.
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }

    // Method that will display form values and redirect to home page.
    async function displayAndRedirect() {
        let name = document.forms["form"]["name"].value;
        let number = document.forms["form"]["number"].value;
        let email = document.forms["form"]["email"].value;
        let message = document.forms["form"]["message"].value;
        // Write input to the console.
        console.log("Name: " + name + "\nPhone Number: " + number + "\nEmail Address: " + email + "\nMessage: " + message);
        
        // Makes the program wait 3000 milliseconds before executing the function.
        await sleep(3000);

        location.replace("./HomePage.html");
        
      };
}

// This section checks for the body id of humanResourcesPage and populates the HumanResourcesPage.html appropriately.
if (document.getElementById("humanResourcesPage")){

}