import { validateFirst as validFirst, validateLast as validLast, validateUsername as validUsername,  validateEmail as validEmail, validatePassword as validPassword} from './form.js';
// TO DO: load the user class script with alias
import { User as user} from './user.js';

console.log('app.js loaded');

/**
 * iffe to insert nav bar at the top of each page
 */
$(function() {
    let navBar = `<div class="navigation">
	                <nav class="nav">
		                <a class="nav-link active" href="index.html">Home</a>
		                <a class="nav-link" href="slideshow.html">Slideshow</a>
		                <a class="nav-link disabled" id="username" href="#"></a>
		                <a class="nav-link" href="form.html">Form</a>
	                </nav>
                </div>`;

    //TO DO: replace the nav-holder
    $('#nav-holder').replaceWith(navBar);
    $('#nav-holder').html(navBar);
});

/**
 * function to add styling to all links on the page
 */
$(function () {
    $("a").addClass("fancy-link");
});


/**
 * function to demo adding content with .text() and .html()
 *  */
 $(function () {

     let navDiv = $("div:first");
     console.log(navDiv.html());
     console.log(navDiv.text());

     let contentDiv = $('#content-div');
     console.log(contentDiv.html());
     console.log(contentDiv.text());

     // text to use with new paragraph
     var text = "It is one of his best works!";
     //create a paragraph
     let newP = $("<p></p>");
     //TO DO: add text with html()
    newP.html(text);
    // append to contentDiv
    $('#content-div').append(newP);
    // add text
    newP.text("I am very excited for the opening of the new adaptation of his work.");
    // TO DO: test when very excited is in a strong tag, not sure if this is what its asking or not.
    newP.html("I am <strong>very excited</strong> for the opening of the new adaptation of his work.");
    // TO DO: append to newP text
    $('#content-div').append(newP);
 });

/**
 * function to demo adding toggle to button
 *  */
$(function () {
    // TO DO: complete the function
    // get the button
    let button = $('#toggleButton');
    // add a click function
    button.on('click', function() {
       // get the parent div's p tags
       let pTags = $('#indexDiv p');
       // for each p in the div
       pTags.each(function(index, pTag) {
           let currentClass = $(pTag).attr('class');
           // if it has toggleHide class
           if(currentClass === 'toggleHide'){
               //remove toggleHide class and add toggleShow class
               // styling is controlled in the css
               $(this).removeClass('toggleHide').addClass('toggleShow');
               // otherwise assume it has the toggleShow class
               //remove toggleShow and add toggleHide
           }
           else if(currentClass === 'toggleShow'){
               $(this).removeClass('toggleShow').addClass('toggleHide');
           }
    });
});
// FORM JQUERY
// TO DO: import form validation functions with alias 
// DONE AT TOP OF FILE.
// if the submit button is on the page
 if ($("#btnRegSubmit")) {
    // TO DO: add a click function that calls a callback function
     $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();
        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class members work in calling the validation
            // get the first name input
            var userFName = $('#inputFirst').val();
            // get the last name input
            var userLName = $('#inputLast').val();
            // get the username input
            var userName = $('#inputUsername').val();
            // get the email input
            var userEmail = $('#inputEmail').val();
            // get the password input
            var userPassword = $('#inputPassword').val();
            var newUser = new user(userFName, userLName, userName, userEmail, userPassword);

        // debug statement for object
        console.log(`UserDetails: ${newUser.displayUser()}`);

        // validate first name
        $(".errorMessage:first").append(validFirst(userFName));
        // validate last name
        $(".errorMessage:eq(1)").append(validLast(userLName));
        // validate  username
        $(".errorMessage:eq(2)").append(validUsername(userName));
        // validate confirm password
        $(".errorMessage:eq(4)").append(validPassword(userPassword));
        $(".errorMessage:eq(5)").append(validPassword(userPassword));
    });
}

// TO DO: if reset button present
if ($("#btnReset")) {
    // bind a click event handler
    $("#btnReset").click(function () {
        // clear out all error message paragraphs
        $('.errorMessage p').html("<p></p>");
    });
}



// SLIDESHOW
// TO DO: if there's a gallery class on the page
if ($(".gallery")) {
    // call a callback function to handle the gallery rotation
        // get the image tag
        let imageTag = $("#imageRotation");
        // get a list of your images
         let images = [
             "./images/portraits/portrait-01.jpg",
             "./images/portraits/portrait-02.jpg",
             "./images/portraits/portrait-03.jpg",
             "./images/portraits/portrait-04.jpg",
             "./images/portraits/portrait-05.jpg",
             "./images/portraits/portrait-06.jpg",
             "./images/portraits/portrait-07.jpg",
             "./images/portraits/portrait-08.jpg",
             "./images/portraits/portrait-09.jpg",
             "./images/portraits/portrait-10.jpg",
             "./images/portraits/portrait-11.jpg",
             "./images/portraits/portrait-12.jpg",
             "./images/portraits/portrait-13.jpg",
             "./images/portraits/portrait-14.jpg",
             "./images/portraits/portrait-15.jpg",
             "./images/portraits/portrait-16.jpg",
             "./images/portraits/portrait-17.jpg",
             "./images/portraits/portrait-18.jpg",
         ];
        // set a first index
        var currentIndex = 0;
        // call the setInterval method that will re-call this method at a set interval
        setInterval(function () { 
            // increment the image index but no greater than how many images you have  
            // fade out the current image
            imageTag.fadeOut(1000, function() {
                // $(this) refers to the object that calls the callback or in this case galleryImage
                // change the src attribute of the image
                $(this).attr("src", images[currentIndex]);
                currentIndex++;
                if (currentIndex >= images.length) {
                    currentIndex = 0;
                } 
            });
            // fade it back in
            imageTag.fadeIn(1000);
            // debug statement
            console.log("Images Rotated Successfully!");
        //set the time for more than how long the fade out and in process will take or you won't get the images you expect 
        }, 3000);  
}})