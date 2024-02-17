/*
    Name: Jakob Olive
    Date: 2024-02-16
    Course: INFT 2202
    File: Form.js
    File Desc: This file will include the form validation functions needed for both the login form as well as the registration form
     that will be exported and imported into the App.js file.
*/
/**
 * LOGIN SECTION.
 */
/**
 * validateLoginUsername - Validates the Users Username entry through the login form.
 * @param {string} loginUsername
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateLoginUsername(loginUsername) {
    if (loginUsername.length < 2) {
        return "<p>The <b>Username</b> you have entered is too short, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};
/**
 * validateLoginPassword - Validates the Users Password entry through the login form.
 * @param {string} loginPassword
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateLoginPassword(loginPassword) {
    if (loginPassword.length < 6) {
        return "<p>The <b>Password</b> you have entered is too short, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * REGISTER SECTION.
 */
/**
 * validateRegFirstName - Validates the Users First Name entry through the register form.
 * @param {string} regFirstName
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateRegFirstName(regFirstName) {
    if (regFirstName.length < 2) {
        return "<p>The <b>First Name</b> you have entered is too short, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};
/**
 * validateRegLastName - Validates the Users Last Name entry through the register form.
 * @param {string} regLastName
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateRegLastName(regLastName) {
    if (regLastName.length < 2) {
        return "<p>The <b>Last Name</b> you have entered is too short, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};
/**
 * validateRegEmail - Validates the Users Email entry through the register form.
 * @param {string} regEmail
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateRegEmail(regEmail) {
    if (regEmail.length < 8) {
        return "<p>The <b>Email Address</b> you have entered is too short, please try again with valid data.</p>"
    }
    else if (!regEmail.includes('@')) {
        return "<p>The <b>Email Address</b> you have entered does not contain a <b>@</b> symbol, please try again with valid data.</p>"
    }
    else if (!regEmail.includes('.com') || !regEmail.includes(".ca") ) {
        return "<p>The <b>Email Address</b> you have entered does not contain <b>.com</b> or <b>.ca</b>, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};
/**
 * validateRegPassword - Validates the Users Password entry through the register form.
 * @param {string} regPassword
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateRegPassword(regPassword) {
    if (regPassword.length < 6) {
        return "<p>The <b>Password</b> you have entered is too short, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};
/**
 * validateRegConfirmPassword - Validates the Users Confirm Password entry through the register form.
 * @param {string} regConfirmPassword
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateRegConfirmPassword(regConfirmPassword) {
    if (regConfirmPassword.length < 6) {
        return "<p>The <b>Confirm Password</b> you have entered is too short, please try again with valid data.</p>"
    }
    else if (regConfirmPassword == regPassword) {
        return "<p>The <b>Confirm Password</b> and <b>Password</b> you have entered do not match, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};
/**
 * validateRegUsername - Validates the Users Username entry through the register form.
 * @param {string} regUsername
 * @returns HTML Element to be inserted into the ErrorMessage <div> tag.
 */
export function validateRegUsername(regUsername) {
    if (regUsername.length < 2) {
        return "<p>The <b>Username</b> you have entered is too short, please try again with valid data.</p>"
    }
    else {
        return "<p></p>";
    }
};