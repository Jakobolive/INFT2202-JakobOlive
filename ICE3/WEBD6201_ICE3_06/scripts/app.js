// Change the class of each box, reordering the colours.
// Get the boxes with jquery.
let boxes = $('.box');
// Loop through each box.
boxes.each(function(index, box){
// Get the class of the current box.
    let currentClass = $(box).attr('class');
    // If the class is Red, make it blue.
    if (currentClass === 'box red-box') {
        $(box).attr('class', 'box blue-box'); 
    }
    // If the class is Blue, make it green.
    else if (currentClass === 'box blue-box') {
        $(box).attr('class', 'box green-box'); 
    }
    // If the class is green, make it red.
    else if (currentClass === 'box green-box') {
        $(box).attr('class', 'box red-box'); 
    }
});

// Create a button to open the model.
let button = $('<button>Open Model</button>');
// Get the button with jquery.
$('#content').append(button);
// Add a click event listener to the button.
button.on('click', function() {
    // show the model.
    $('.lightbox').show();
});
// When the button is clicked, show the model.