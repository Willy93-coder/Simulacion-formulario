import {
    validateInput,
    eventListener,
    validateForm,
    sendForm,
} from "./functions.js";

const formHtml = document.getElementById("form");
const userNameInput = document.getElementById("username");
const firstNameInput = document.getElementById("firstname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

eventListener(userNameInput, validateInput);
eventListener(firstNameInput, validateInput);
eventListener(emailInput, validateInput);
eventListener(passwordInput, validateInput);


sendForm(formHtml, validateForm);
