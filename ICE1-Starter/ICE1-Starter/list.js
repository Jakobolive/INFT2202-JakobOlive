// Name: Jakob Olive
// Date: 2024-01-11
// Made changes in the html, adding id to some elements needed and tweaked some css things so that the class would show.

// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("list");

// ADD NEW ITEM TO END OF LIST
// Create element
var nextElement1 = document.createElement("li");
let element1 = document.createElement("li");

// Create text node
var nextItem1 = document.createTextNode("Olive Oil");
let text1 = document.createTextNode("Cream");
// Add text node to element
nextElement1.appendChild(nextItem1);
element1.appendChild(text1);
// Add element end of list
groceryList.appendChild(nextElement1);
groceryList.appendChild(element1);

// ADD NEW ITEM START OF LIST
// Create element
var nextElement2 = document.createElement("li");
let element2 = document.createElement("li");
// Create text node
var nextItem2 = document.createTextNode("Orange Juice");
let text2 = document.createTextNode("Spinach");
// Add text node to element
nextElement2.appendChild(nextItem2);
element2.appendChild(text2);
// Add element to list
groceryList.prepend(nextElement2);
groceryList.prepend(element2);
// All <li> elements
document.write(groceryList);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var count = 0;
// Loop through elements
for(count; count < groceryList.childElementCount; count++)
{
    // Change class to cool 
    groceryList.classList.add("cool");
    // This works but the style.css has other styles that go against the cool class. I changed text to blue to show that it works.
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var oldHeader = document.getElementById("header2");
// h2 text
//? no idea what I am meant to do here.
// No. of <li> elements
var numOfItems = groceryList.childElementCount;
// Content
let newHeaderText = "Buy Groceries: " + numOfItems.toString();
// Update h2 using innerHTML (not textContent) because it contains markup
document.getElementById("header2").innerHTML = newHeaderText;
// Not done exactly the way the assignment wants, but it is done.