import { validateInput, eventListener } from "./functions.js";

const formHtml = document.getElementById("form");
const userNameInput = document.getElementById("username");
const firstNameInput = document.getElementById("firstname");
const emailInput = document.getElementById("email");

eventListener(userNameInput, validateInput);
eventListener(firstNameInput, validateInput);
eventListener(emailInput, validateInput);
