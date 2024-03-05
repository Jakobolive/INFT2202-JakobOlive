/*
    Name: Jakob Olive
    Date: 2024-02-13
    Course: INFT 2202
    File: User.js
    File Desc: This is the .js class that will be used to create the User. it will contain the required variables for the User to take
    along with the constructor to build the User object. This file will also contain the getter and setter methods for the User.
    This file will export and be imported into the App.js.
*/

export class User {

    /**
     * Constructor for the User object that takes the following parameters.
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} username
     * @param {string} emailAddress
     * @param {string} password
     */
    constructor(firstName, lastName, username, emailAddress, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    /**
     * This function will formate the variables from the user object and return them as a string.
     * @property {function} displayUser Returns the user details in a formatted way to be called in a console.print statement.
     * @returns {string} That will be printed to the console.
     */
    displayUser() {
         return `
         First Name: ${this.firstName}
         Last Name: ${this.lastName}
         Username: ${this.username}
         Email: ${this.emailAddress}
         Password: ${this.password}`
    }
}