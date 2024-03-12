(function() {
    // Jakob Olive
    // Question 0
    // Use npm to install jquery and holder.js done.
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot done
    
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
    $(span).html('&copy;'+currentYear);

    // Question 2
    // get a reference to the test table
    var testTable = $('#test-table');
    // get a reference to the second row in the table
    var secondRow = $(testTable).find("tr:eq(2)");
    // update the student number to be 100100100
    $(secondRow).find("td:eq(2)").text("100100100");

    // Question 3
    // create a table row with your own information
    var myRowStart =$("<tr>");
    // create a table delimeter and set your first name\
    var firstName = "<td>Jakob</td>";
    // add it to your table row
    myRowStart.append(firstName);
    // create a table delimeter and set your last name
    var lastName = "<td>Olive</td>";
    // add it to your table row
    myRowStart.append(lastName);
    // create a table delimeter and set your banner id
    var id = "<td>100810499</td>";
    // add it to your table row
    myRowStart.append(id);
    // add your row to the test table body
    testTable.append(myRowStart);

    // Question 4
    // remove Alice Bobberts from the table
    testTable.find("tr:eq(3)").remove();

    // Question 5
    // add the .table-info class to your personal row
    testTable.find("tr:eq(2)").addClass("table-info");

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    testTable.find("tr:first").removeClass("table-warning");

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    testTable.find("tr:eq(1)").removeClass("table-dark");
    testTable.find("tr:eq(1)").addClass("table-success");

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    const container = $('<div class="container">');
    const card = $('<div class="card">');
    const image = $('<img class="card-img-top" src="">');
    card.append(image);
    // // make a card body, append it to the card
    const cardBody = $('<div class="card-body">');
    card.append(cardBody);
    // // make a heading, a paragraph, a link, append them to the card-body
    const heading = $('<h5 id="cardHeading" class="card-title">Header for Card</h5>');
    const paragraph = $('<p class="card-text">Paragraph for card.</p>');
    const link = $('<a href="" class="card-link">Link that goes nowhere</a>');
    card.append(heading);
    card.append(paragraph);
    card.append(link);
    // // append the card to the new container
    container.append(card);
    $("main").append(container);
    // use holder.js to render the image in the card
    image.attr("data-src", "holder.js/300x200");
    // add a heading with your name in the card body, and a sentence or two about yourself.
    heading.text("Jakob Olive");
    paragraph.text("This is a random little rant to fill the void within the assignment, hopefully my JQuery begins to work");
})();
