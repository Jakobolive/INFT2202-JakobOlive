(function() {

    // Question 1
    // Update the page title to say "YOUR NAME - Test 1"
    document.title = "Jakob Olive - Test 1";
    // Update the navbar title to say "YOUR NAME"
    document.getElementById("navName").innerHTML = "Jakob Olive";

    // Question 2
    // get a reference to the test table
    let testTable = document.getElementById("test-table");
    // get a reference to the second row in the table
    let secondRow = testTable.getElementsByTagName("tr")[2];
    // update the student number to be 100100100
    let td = secondRow.getElementsByTagName("td")[2];
    td.innerHTML = "100100100";
    


    // Question 3
    // create a table row with your own information
    let myRow = document.createElement("tr");
    // create a table delimeter and set your first name
    let myFName = document.createElement("td");;
    let fnametext = document.createTextNode("Jakob");
    myFName.appendChild(fnametext);
    // add it to your table row
    myRow.appendChild(myFName);
    // create a table delimeter and set your last name
    let myLName = document.createElement("td");
    let lnametext = document.createTextNode("Olive");
    myLName.appendChild(lnametext);
    // add it to your table row
    myRow.appendChild(myLName);
    // create a table delimeter and set your banner id
    let myID = document.createElement("td");
    let idtext = document.createTextNode("100810499");
    myID.appendChild(idtext);
    // add it to your table row
    myRow.appendChild(myID);
    // add your row to the test table body
    testTable.appendChild(myRow);


    // Question 4
    // remove Alice Bobberts from the table
    let alice = testTable.getElementsByTagName("tr")[3];
    alice.remove();

    // Question 5
    // add the .table-info class to your personal row
    myRow.classList.add("table-info");

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    let adam = testTable.getElementsByTagName("tr")[1];
    adam.classList.remove("table-warning");

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    secondRow.classList.remove("table-dark");
    secondRow.classList.add("table-success");

    // Question 8
    // use the node package manager to install a new package, holderjs (see https://www.npmjs.com/package/holderjs)
    // done.
    // include the holder script at the bottom of index.html
    // done.
    // under the container div holding the test-table, create another container div, and create an image place"holder".

    let newdiv = document.createElement("div");
    newdiv.classList.add("container");
    let holderimg = document.createElement("img");
    holderimg.setAttribute("src", "holder.js/300x200");
    newdiv.append(holderimg);

    let footer = document.getElementsByTagName("footer");
    
    document.insertBefore(newdiv, footer);

    // Couldnt figure this last section out using javascript.

})();
