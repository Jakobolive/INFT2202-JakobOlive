/*
    Name: Jakob Olive
    Date: 2024-01-28
    Course: INFT 2202
    File: App.js
    File Desc: This is the main file that populates and operates the app. This page using DOM manipulation to check which page is which, and
        populate the page with the appropriate data. This file will also create a nav bar at the bottom of the page as requested in the 
        assignment document as well as perform the form validation imported from the Form.js file and the internal action of the forms as
        required in lab2.
        lab2 Done.
*/
/**
 * IMPORT SECTION FOR LAB2.
 */
import { validateLoginUsername as userLoginValid, validateLoginPassword as passLoginValid, validateRegFirstName as firstNameValid, validateRegLastName as lastNameValid, validateRegUsername as usernameValid,  validateRegEmail as emailValid, validateRegPassword as passwordValid, validateRegConfirmPassword as confirmPasswordValid} from './Form.js';
import { User as currentUser} from './User.js';

/*
    Section that will change the current html top navbar on all pages, changing the product link to interests, adding the human resources link,
    as well as compiling the footer navbar.
*/

// Use innerHTML to alter the text on the a tag of the product nav bar.
document.getElementById("product").innerHTML = "Interests ";

// Grab the ul tag from the top navbar to inject the human resources link, as well as creating the li tag and the a tag.
let topNavBar = document.getElementById("nav_list");
let contactUsList = document.getElementById("contactUsList");
let humanResourcesList = document.createElement("li");
let humanResourcesText = document.createElement("a");
humanResourcesText.setAttribute("id", "hr");
let registerList = document.createElement("li");
let registerText = document.createElement("a");
registerText.setAttribute("id", "register");
let blogList = document.createElement("li");
let blogText = document.createElement("a");
blogText.setAttribute("id", "blog");

// Creating text nodes and adding elements and classes to the future tags.
let humanResourcesTextNode = document.createTextNode("Human Resources ");
humanResourcesText.appendChild(humanResourcesTextNode);
let registerTextNode = document.createTextNode("Register ");
registerText.appendChild(registerTextNode);
let blogTextNode = document.createTextNode("Blog ");
blogText.appendChild(blogTextNode);

humanResourcesText.href = "./HumanResourcesPage.html";
humanResourcesList.classList.add("nav-item");
humanResourcesText.classList.add("nav-link");
registerText.href = "./RegisterPage.html";
registerList.classList.add("nav-item");
registerText.classList.add("nav-link");
blogText.href = "./Blog.html";
blogList.classList.add("nav-item");
blogText.classList.add("nav-link");

// Appending the tags together and then inserting them into the nav bar.
humanResourcesList.appendChild(humanResourcesText);
topNavBar.insertBefore(humanResourcesList, contactUsList);
registerList.appendChild(registerText);
topNavBar.append(registerList);
blogList.appendChild(blogText);
topNavBar.append(blogList);

// Adding font awesome icons to the upper navbar.
// First grabbing all the nav bar <a> tags to append into.
let homeNavLink = document.getElementById("home");
let productNavLink = document.getElementById("product");
let serviceNavLink = document.getElementById("services");
let aboutUsNavLink = document.getElementById("aboutUs");
let hRNavLink = document.getElementById("hr");
let contactUsNavLink = document.getElementById("contactUs");
let registerLink = document.getElementById("register");
let blogLink = document.getElementById("blog");

// Creating <i> tags to set classes to.
let homeIcon = document.createElement("i");
homeIcon.classList.add("fa-solid", "fa-house");
let prodIcon = document.createElement("i");
prodIcon.classList.add("fa-solid", "fa-leaf");
let servIcon = document.createElement("i");
servIcon.classList.add("fa-solid", "fa-code");
let aboutIcon = document.createElement("i");
aboutIcon.classList.add("fa-solid", "fa-question");
let hrIcon = document.createElement("i");
hrIcon.classList.add("fa-solid", "fa-user");
let contactIcon = document.createElement("i");
contactIcon.classList.add("fa-solid", "fa-phone");
let registerIcon = document.createElement("i");
registerIcon.classList.add("fa-solid", "fa-pen-to-square");
let blogIcon = document.createElement("i");
blogIcon.classList.add("fa-solid", "fa-pencil");

// Appending the <i> tags to the <a> tags.
homeNavLink.appendChild(homeIcon);
productNavLink.appendChild(prodIcon);
serviceNavLink.appendChild(servIcon);
aboutUsNavLink.appendChild(aboutIcon);
hRNavLink.appendChild(hrIcon);
contactUsNavLink.appendChild(contactIcon);
registerLink.appendChild(registerIcon);
blogLink.appendChild(blogIcon);

// Grabbing the footer div and creating the elements needed for the fixed bottom nav bar.
let footerNavString = "Copyright 2024, Jakob Olive";
let footerDiv = document.getElementById("footer");
footerDiv.classList.add("transparent");
let containerDiv = document.createElement("div");
containerDiv.classList.add("transparent");
let bottomNavBar = document.createElement("nav");
let bottomNavBarText = document.createElement("p");
let bottomNavBarTextNode = document.createTextNode(footerNavString)


// Adding classes, appending together, and then appending to footer.
bottomNavBar.classList.add("navbar", "fixed-bottom", "navbar-expand-lg", "bg-body-tertiary");
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
    let homePageHeaderString = "Welcome To The Home Page!";
    let homePageParagraphString = `The home page really doesn't have a whole lot to offer, other then this nice picture I took and a
     little rant about the me being a student at DC. Please explore the website as this assignment had me learn a lot from DOM Manipulation
      and how to use it properly. DOM Manipulation can be a very helpful tool when it comes to creating a website, or just simply changing
      a few attributes or elements. Needless to say, other than the top navbar, this entire site was built off DOM Manipulation, which may
      or may not explain why some things are a little... interesting to say the least.`;

    // Creating elements and text nodes for both the header and the paragraph.
    let homePageHeaderElement = document.createElement("h1");
    let homePageParagraphElement = document.createElement("p");
    let homePageImageElement = document.createElement("img");
    homePageImageElement.setAttribute("src", "./images/image1.png")
    let homePageHeaderText = document.createTextNode(homePageHeaderString);
    let homePageParagraphText = document.createTextNode(homePageParagraphString);
    // Appending the nodes together and then onto the homePage variable, the actual page.
    homePageHeaderElement.appendChild(homePageHeaderText);
    homePageParagraphElement.appendChild(homePageParagraphText);

    content.appendChild(homePageHeaderElement);
    content.appendChild(homePageParagraphElement);
    content.appendChild(homePageImageElement);
}

// This section checks for the body id of productPage and populates the ProductPage.html appropriately.
if (document.getElementById("productPage")){
    // Define the strings needed for the h1, h2, and p tags.
    let mainHeaderString = "Welcome To The Interests Page!";
    let mainParagraphString = `In this page, I was tasked with talking a little about my interests as well as finding appropriate pictures
     to insert into the page, yet again only using DOM Manipulation. Below will be the results, including three headers, three short paragraphs, as 
     well as 3 image tags. Who knows, may we will have some common interests.`;
    let firstHeaderString = "The Great Outdoors";
    let firstParagraphString = `Coming from the bushland of Wawa, a wee town in Northeastern Ontario, loving the great outdoors is in my blood. 
    When im up north, I spend a majority of my time on the land either hunting, fishing, canoeing, and even straight up bushwhacking. In my eyes 
    there is always something to do in the great outdoors, maybe thats why they call it that, the "GREAT" outdoors. Also, I am well aware that this 
    section was suppose to include my favorite articles of media, but the outdoors is the worlds best show and the wind in the trees is the worlds 
    best music. \n(Maybe I get bonus points for adding my own pictures... *Laughs*)`;
    let secondHeaderString = `The Musical Genre That Is "Rez Tunes".`;
    let secondParagraphString = `Being a Rez kid myself, I have grown quite fond of the music often heard around NDN Country. This isn't 
    so much a technical genre of music, but more of less a collection of songs that frequent the Indian Reservation scene. This includes a wide 
    variety of older songs, as well as a fair share of modern day releases from Indigenous artists. A few examples of more popular core 
    rez songs would be Redbone's "Come and Get Your Love", Brooks & Dunn's "Neon Moon", a load of classic rock, and possibly Buffy St. Marie, 
    depending on where you land on that debate. A few of the deeper cuts are based off artists more well known in the Native Community, such as
     Ernest Monias, Chester Knight, NDN Karz, including some newer additions The Halluci Nation, Snotty Nose Rez Kids, and drum groups like 
     Northern Cree. Otherwise, thats enough about my little "Rez Banger" rant.`;
    let thirdHeaderString = "Indigenous Comedians";
    let thirdParagraphString = `After a very long thought process trying to narrow it down to just on individual, my mind shifted and assumed 
    that I could just include the group as a whole. Indigenous Comedy is truly something special, comedians say what they mean, and they are 
    more than aware of the experiences that come with being Indigenous, and they know we like to laugh. Some people say we are funny people, which
     is true, but not for the reasons we like to admit. This little sub brand of comedy features act well known in Indigenous Communities 
     like Sherry Lynn McKay, Don Burnstick, and even a more household name due to the popular show, Reservation Dogs. Dallas Goldtooth, AKA,
      William Knifeman. Now that I explained myself a little bit, I feel that is enough about my interests.`;

    // Creating required elements and text nodes to hold the page contents.
    let interestsPageHeaderElement = document.createElement("h1");
    let interestsPageParagraphElement = document.createElement("p");
    let firstInterestPictureElement = document.createElement("img");
    firstInterestPictureElement.setAttribute("src", "./images/image2.png");
    let firstInterestHeaderElement = document.createElement("h2");
    let firstInterestParagraphElement = document.createElement("p");
    let secondInterestPictureElement = document.createElement("img");
    secondInterestPictureElement.setAttribute("src", "./images/image3.png");
    let secondInterestHeaderElement = document.createElement("h2");
    let secondInterestParagraphElement = document.createElement("p");
    let thirdInterestPictureElement = document.createElement("img");
    thirdInterestPictureElement.setAttribute("src", "./images/image4.png");
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
    let mainHeaderString = "Welcome To The Services Page";
    let mainParagraphString = `This page is fairly simple. to showcase some of my skills. As the assignment document does not state that 
    the skills HAVE to be about IT, I will take even more time to rant about my side gig for one of my services. Because this is an IT based course, 
    and I seem to really enjoy web development, I will include some technical based skills as well as a part of my "Service List." I will also
     include appropriate pictures to accompany the services, once again, all these header, paragraph, as well as image tags were injected using
      DOM Manipulation. \nThe link below will download a .PDF of my current resume.`;
    let resumeText = "Download Here!";
    let firstHeaderString = "Website Development";
    let firstParagraphString = `Upon my second semester here at Durham College, I found that I really enjoyed website development and all
     the challenges that come along with it, as there are often many. Having two semesters to deal with PHP, I had no idea what JavaScript would 
     hold in store for me. JavaScript did not let me down, as im having quite a blast with this course content. My primary IT based service, that 
     I would be half confident in, would have to be Website Development. If you or your company would be interested in a custom website, please 
     find the Contact Us page and send me a message.`;
    let secondHeaderString = "Mobile App Development";
    let secondParagraphString = `Mobile App Development has also became another interest within the last two years. Having done interviews with mobile 
    developers as well as attempting and succeeding to create a small application in last semesters, Object Oriented Programming course, I would be up 
    for the challenge. ALthought I have only had the time to give mobile development a whirl once, honestly, I would love to try it again. It 
    was an interesting learning curve on Visual Studios as well as trying to understand how everything cooperated with XML and C#. Once again,
     if you are interested in a better look at the potential my Mobile App Development may hold, feel free to contact me.`;
    let thirdHeaderString = "Indigenous Artwork";
    let thirdParagraphString = `Lastly, my side gig, this is where I create and sell authentic Indigenous artwork. Lately, my winters have
    been fill with either classes at the College, or prepping for the summer Pow Wow Season. Although I could probably go on for hours about 
    this, its probably a good idea to stop while im ahead and end it off with a little quote. its a common saying in NDN Country, 
    "Support Inspired Natives, Not Native Inspired."`;

    // Creating required elements and text nodes to hold the page contents.
    let servicePageHeaderElement = document.createElement("h1");
    let servicePageParagraphElement = document.createElement("p");
    let servicelink = document.createElement("p");
    let servicePageResumeLinkElement = document.createElement("a");
    servicePageResumeLinkElement.setAttribute("href", "./images/resume.pdf");
    servicePageResumeLinkElement.setAttribute("download", "JakobOliveResume");
    servicePageResumeLinkElement.classList.add("center");
    let firstServicePictureElement = document.createElement("img");
    firstServicePictureElement.setAttribute("src", "./images/image5.png");
    let firstServiceHeaderElement = document.createElement("h2");
    let firstServiceParagraphElement = document.createElement("p");
    let secondServicePictureElement = document.createElement("img");
    secondServicePictureElement.setAttribute("src", "./images/image6.png");
    let secondServiceHeaderElement = document.createElement("h2");
    let secondServiceParagraphElement = document.createElement("p");
    let thirdServicePictureElement = document.createElement("img");
    thirdServicePictureElement.setAttribute("src", "./images/image7.png");
    let thirdServiceHeaderElement = document.createElement("h2");
    let thirdServiceParagraphElement = document.createElement("p");

    let servicePageHeaderText = document.createTextNode(mainHeaderString);
    let servicePageParagraphText = document.createTextNode(mainParagraphString);
    let resumeTextNode = document.createTextNode(resumeText);
    let firstServiceHeaderText = document.createTextNode(firstHeaderString);
    let firstServiceParagraphText = document.createTextNode(firstParagraphString);
    let secondServiceHeaderText = document.createTextNode(secondHeaderString);
    let secondServiceParagraphText = document.createTextNode(secondParagraphString);
    let thirdServiceHeaderText = document.createTextNode(thirdHeaderString);
    let thirdServiceParagraphText = document.createTextNode(thirdParagraphString);

    // Appending all nodes and elements together and then onto the content variable.
    servicePageHeaderElement.appendChild(servicePageHeaderText);
    servicePageParagraphElement.appendChild(servicePageParagraphText);
    servicePageResumeLinkElement.appendChild(resumeTextNode);
    firstServiceHeaderElement.appendChild(firstServiceHeaderText);
    firstServiceParagraphElement.appendChild(firstServiceParagraphText);
    secondServiceHeaderElement.appendChild(secondServiceHeaderText);
    secondServiceParagraphElement.appendChild(secondServiceParagraphText);
    thirdServiceHeaderElement.appendChild(thirdServiceHeaderText);
    thirdServiceParagraphElement.appendChild(thirdServiceParagraphText);

    content.appendChild(servicePageHeaderElement);
    content.appendChild(servicePageParagraphElement);
    servicelink.appendChild(servicePageResumeLinkElement);
    content.appendChild(servicelink);
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
    let mainHeaderString = "Meet The Face Behind The Madness";
    let mainParagraphString = `In reality, there are lots of things I could talk about but for the sake of this lab, I should keep it short. 
    I am an Off Reserve Native from Michipicoten First Nations, outside of Wawa, Ontario, roughly an 11 hour drive north from Oshawa. I spend 
    most of my free time, now either working on homework, creating, or just straight up living life. As sometimes, you dont have the day, 
    the day has you, and you just have to roll with the punches. Still being a Rez Kid at heart taught me to live life by the day, and laugh 
    about everything we can, because life is very, very bitter without laughter. Having grown up in the bush living off the land and for the
     most part, away from technology, I turned to computer programming as an effort to try something
      new. I had decided to make the journey away for college out of the fears of being stuck in a gold mining career my entire life, which is
       all too common up north. My educational journey brought me here, to Durham College in Oshawa, into a Web Development class making a website
        to rant about myself, possibly more than I should be. In short, that is a little about myself, now please enjoy this little AI generated
         picture that Tik Tok slapped together for me.`;

    // Creating required elements and text nodes to hold the page contents.
    let aboutUsPagePictureElement = document.createElement("img");
    aboutUsPagePictureElement.setAttribute("src", "./images/myAi.png");
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
    let contactUsHeaderString = "Feel Free To Contact Us For Further Inquiries";
    let contactUsParagraphString = `At this little website, we offer a few services, and share a fair bit of information about the creator, so if you have 
    any inquires or just want to reach out to hear more of the storm that is my story, feel free to fill out the form and contact me. Please, do
     not expect a reply, as this website may or may not just be a pigment of your imagination.`;

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

    let buttonSpacer1 = document.createElement("br");
    let buttonSpacer2 = document.createElement("br");
    let buttonSpacer3 = document.createElement("br");
    submitList.appendChild(submitButton);
    buttonLayout.appendChild(submitList);
    buttonLayout.appendChild(buttonSpacer1);
    buttonLayout.appendChild(buttonSpacer2);
    buttonLayout.appendChild(buttonSpacer3);
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
    // Define the strings needed for the h1, h2, and p tags.
    let mainHeaderString = "The Face Behind The Madness Is Also HR.";
    let mainParagraphString = `In reality, There were no descriptions in the assignment document as to what to put in the Human Resources page, 
    so we will keep it nice and simple. The contents of this page is a copy and paste version of the About Us page, just with different text strings.
     If you really wish to contact Human Resources, perhaps to report a bug, please go to the contact us page and submit a message, we will 
     be sure to look at it.`;

    // Creating required elements and text nodes to hold the page contents.
    let aboutUsPagePictureElement = document.createElement("img");
    aboutUsPagePictureElement.setAttribute("src", "./images/myAi.png");
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

//
// LAB 2 SECTION JQUERY AND FORM VALIDATION.
// Adding a button to replace where it says"built from bootstraps.
$(function() {
    let loginButton = `<button id="loginButton">Login <i class="fa-solid fa-lock"></i></button>`
    $(".navbar-text").html(loginButton);
    // Adding functionality to the button.
    $("#loginButton").click(function() {
        window.location.href = "./LoginPage.html";
    })
});

/*
    Section that will build the pages and add the functionality required for lab 2 using jquery and javascript. The following will be both
    an if statement that checks if the page is the login page and the registration page, the pages will be built accordingly via an IFFY.
    The pages will then create the required functionality for each according to the assignment document.
*/

// This section checks for the body id for the loginPage, and builds the login form appropriately.
if (document.getElementById("loginPage")) { 
    // First an IFFY to create the login form before the validation begins.
    $(function() {
        let loginForm = `
                        <h2>Login</h2>
                        <p>No Account? <a href="./RegisterPage.html">Click Here</a> To Sign Up</p>
                        </br>
                        <form id="loginForm">
                        <div class="center" id="first-group">
                            <i class="fa-solid fa-user"></i>
                            <input
                                type="text"
                                id="usernameInput"
                                placeholder="Enter Your Username"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="second-group">
                            <i class="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="passwordInput"
                                placeholder="Enter Your Password"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="third-group">
                        <button type="submit" class="btn btn-light" id="buttonLogin">
				            Login
			            </button>
                        </div>
                        </form>`;
    
        // Appending the login form to the <div> with the content id.
        $('#content').append(loginForm);
    });
}

// Functionality for the login page that will place the username entered between the contact us link and the register link in the 
// upper navbar.
$(document).ready(function() {
    $('#buttonLogin').click(function (event) {
        // Preventing the default submission.
        event.preventDefault();
        // Empty all ErrorMessage div's if needed.
        $('.ErrorMessage p').html("<p></p>");
        // Grabbing the values of the inputs.
        var loginUsername = $('#usernameInput').val();
        var loginPassword = $('#passwordInput').val();
        // Validate the user input that the password and username are within character range or more than 6 and 2, otherwise spit out error message.
        $('.ErrorMessage:first').html(userLoginValid(loginUsername));
        $('.ErrorMessage:eq(1)').html(passLoginValid(loginPassword));
        // Checking if any of the ErrorMessage <p> tags contain text (if they are active or not.)
        var noLoginErrors = true;
        $('.ErrorMessage p').each(function() {
            if ($(this).text() !== "") {
                noLoginErrors = false;
                return false;
            }
        });
        // If statement that checks if the noLoginError bool is true, if so it will start the function of adding the Username to the top nav.
        if (noLoginErrors) {
            // Creating the dynamic nav with the username.
            let usernameNav = `<li id="usernameList" class="nav-item">
                            <a id="username" class="nav-link">` + loginUsername + ` <i class="fa-solid fa-unlock"></i></a>
                                </li>`; 
            // Grabbing the contactUs link using JQuery and adding the new <li> after.
            $('#contactUsList').after(usernameNav);
            // Empty the values within the login form.
            $('#usernameInput').val("");
            $('#passwordInput').val("");
        }
    });
})

// This section checks for the body id for the registrationPage, and builds the Registration form appropriately.
if (document.getElementById("registerPage")) {
    // First an IFFY to build the registration form before validation can begin.
    $(function() {
        let registerForm = `
                        <h2>Register Here <i class="fa-solid fa-user"></i></h2>
                        <p>Already Have An Account? <a href="./LoginPage.html">Click Here</a></p>
                        </br>
                        <form id="registerForm">
                        <div class="center" id="first-group">
                            <input
                                type="text"
                                id="firstNameInput"
                                placeholder="First Name"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="second-group">
                            <input
                                type="text"
                                id="lastNameInput"
                                placeholder="Last Name"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="third-group">
                            <input
                                type="text"
                                id="emailInput"
                                placeholder="Email Address"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="fourth-group">
                        <input
                            type="text"
                            id="usernameInput"
                            placeholder="Username"
                            required
                        />
                        <div class="ErrorMessage"></div>
                    </div>
                    </br>
                        <div class="center" id="fifth-group">
                            <input
                                type="password"
                                id="passwordInput"
                                placeholder="Password"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="sixth-group">
                            <input
                                type="password"
                                id="confirmPasswordInput"
                                placeholder="Confirm Password"
                                required
                            />
                            <div class="ErrorMessage"></div>
                        </div>
                        </br>
                        <div class="center" id="seventh-group">
                        <button type="submit" class="btn btn-light" id="registerBtn">
				            Register
			            </button>
                        </div>
                        </form>`;
    
        // Appending the register form to the <div> with the content id.
        $('#content').append(registerForm);
    });
}

// Functionality that will take the user input, validate it and use the imported constructor method to create a new User. Once the new
// User is created, it will be displayed in the console using a function.
$(document).ready(function() {
    $('#registerBtn').click(function (event) {
        // Preventing the default submission.
        event.preventDefault();
        // Empty all ErrorMessage div's if needed.
        $('.ErrorMessage p').html("<p></p>");
        // Grabbing the values of the inputs.
        var regFirstName = $('#firstNameInput').val();
        var regLastName = $('#lastNameInput').val();
        var regEmail = $('#emailInput').val();
        var regUsername = $('#usernameInput').val();
        var regPassword = $('#passwordInput').val();
        var regConfirmPassword = $('#confirmPasswordInput').val();
        // Validate the user input that the password and username are within character range or more than 6 and 2, otherwise spit out error message.
        $('.ErrorMessage:first').html(firstNameValid(regFirstName));
        $('.ErrorMessage:eq(1)').html(lastNameValid(regLastName));
        $('.ErrorMessage:eq(2)').html(emailValid(regEmail));
        $('.ErrorMessage:eq(3)').html(usernameValid(regUsername));
        $('.ErrorMessage:eq(4)').html(passwordValid(regPassword));
        $('.ErrorMessage:eq(5)').html(confirmPasswordValid(regConfirmPassword, regPassword));
        // Checking if any of the ErrorMessage <p> tags contain text (if they are active or not.)
        var noRegErrors = true;
        $('.ErrorMessage p').each(function() {
            if ($(this).text() !== "") {
                noRegErrors = false;
                return false;
            }
        });
        // If statement that checks if the noRegError bool is true, if so it will start the function of adding the Username to the top nav.
        if (noRegErrors) {
            // Calling the constructor to make a new User.
            var newUser = new currentUser(regFirstName, regLastName, regUsername, regEmail, regPassword) 
            // Displaying the user object on the console.
            console.log(`User Details:\n ${newUser.displayUser()}`);
            // Empty the values within the registration form.
            $('#firstNameInput').val("");
            $('#lastNameInput').val("");
            $('#emailInput').val("");
            $('#usernameInput').val("");
            $('#passwordInput').val("");
            $('#confirmPasswordInput').val("");
        }
    });
})

/* SECTION FOR LAB3 */
// This section checks for the body id for the blogPage, and builds the blog page.
if (document.getElementById("blogPage")) { 
    // First an IFFY to create blog cards that will be filled later. This function will iterate 7 times to populate the page with 21 cards,
    // as the assignment requires us to have at least 20. After the cards are built we will use jquery iteration to grab and sort the results
    // and populate using data grabbed from AJAX calls.
    $(function() {
        for (let i = 0; i <= 6; i++) {
            let blogCard = `<div class="card-group">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <img class="card-img-top" src="" alt="Card image cap">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <img class="card-img-top" src="" alt="Card image cap">
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                </div>
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <img class="card-img-top" src="" alt="Card image cap">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                </div>
                            </div>
                            </br>`;
            
        // Appending the cards to the <div> with the content id.
            $('#content').append(blogCard);
        }
    });
}