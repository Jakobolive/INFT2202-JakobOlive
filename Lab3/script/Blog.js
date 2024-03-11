/*
    Name: Jakob Olive
    Date: 2024-03-05
    Course: INFT 2202
    File: Blog.js
    File Desc: This file will contain the methods that will grab the blog cards, that were prepared within the App.js file and populate the
    title, image, as well as the text contents from a AJAX response. This file contains an XHR for the content of the cards as well as a Fetch for 
    the images using the resources provided. This file takes the blog content as normal but randomizes the images.
*/

// Ensuring that the DOM Manipulation in the App.js file is done before advancing into populating the blog.
$(document).ready(function() {
    // Variables that will hold the url of the required objects as well as the API Key needed in the images url.
    let urlBlogContents = 'https://jsonplaceholder.typicode.com/posts';
    let apiKey = '42822775-e717b1b6129231ba584bc35f4';
    let urlBlogImages = 'https://pixabay.com/api/?key='+apiKey+'&q='+encodeURIComponent('nature');

    // Creating the HTTP Request to make an AJAX call with the blog contents url.
    var xhr = new XMLHttpRequest();
    xhr.open("GET", urlBlogContents, true);
    xhr.onreadystatechange = function() {
        // If the state is 4, or finished. call the blog population function.
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json1 = JSON.parse(xhr.responseText);
            populateBlog(json1);
        }
    };
    // Send the request.
    xhr.send();

    /* Function that takes the data from the AJAX call above and uses its JSON contents to alter the text in the blog cards created within
    the other file. This function uses a loop that counts how many cards exist, and continuing to populate the card contents until the last 
    is filled. */
    function populateBlog(data) {
        // JQuery to grab the cards.
        var cards = $('.card');
        // Loop that will iterate until all cards are populated.
        for (let i = 0; i < cards.length; i++) {
            // Variable to hold this specific card.
            let card = cards[i];
            // Setting the card title.
            let cardTitle = $(card).find("h5");
            $(cardTitle).text(data[i].title);
            // Setting the image of the blog card.
           //  let cardImage = $(card).find("img");

            // Setting the card paragraph.
            let cardText = $(card).find("p");
            $(cardText).text(data[i].body);
        }
    }

    /* Fetch call that takes the images url and attempts to find hits or results from Pixabay. If hits are found, the function will get all 
    cards on the page and begin a for loop that will iterate to fill each card. Then set the image url using a Math.random object and populate 
    the corresponding cards image, to the image url. Appropriate error messages also included, if there were no hits or if the fetch failed.*/
    fetch(urlBlogImages)
        .then(response => response.json())
        .then(data => {
            // If there were hits.
            if (data.hits.length > 0) {
                // Create the collection of cards for the loop.
                var cards = $('.card');
                for (let i = 0; i < cards.length; i++) {
                    // Using the random object to set the image index and image url.
                    const randomIndex = Math.floor(Math.random() * data.hits.length);
                    const randomImageURL = data.hits[randomIndex].webformatURL;
                    // Grabbing the specific card and img tag within and setting the src of the img tag to the url.
                    let card = cards[i];
                    let cardImage = $(card).find("img");
                    cardImage.attr('src', randomImageURL);
                }
                // Error message if there were no results.
            } else {
                console.error('No images found in the Pixabay response.');
            }
            // Catch incase there was an error in the fetching process.
        })
        .catch(error => console.error('Error fetching images from Pixabay:', error));
});
