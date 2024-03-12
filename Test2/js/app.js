(function() {
    // Jakob Olive
    // Question 0
    // Use npm to install jquery and holder.js done.
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    $(document).attr("title", "Jakob Olive - Test 2");
    // Update the navbar title to say "YOUR NAME"
    $('.navbar-brand').text("Jakob Olive");
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    const currentYear = new Date().getFullYear();
    var footer = $('footer');
    var span = $(footer).find('span');
    $(span).text("&copy"+currentYear);

    // Question 2
    // get a reference to the test table
    var testTable = $('#test-table');
    // get a reference to the second row in the table
    var secondRow = $(testTable).find("tr eq:1");
    // update the student number to be 100100100
    $(secondRow).find("td eq:2").text("100100100");

    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body

    // Question 4
    // remove Alice Bobberts from the table

    // Question 5
    // add the .table-info class to your personal row

    // Question 6
    // remove the .table-warning class from Adam Kunz's row

    // Question 7
    // change .table-dark to .table-success for John Doe's row

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.

})();
