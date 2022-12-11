// Validar inputs
export const validateInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    const regex = regexExpression();
    validateRegex(regex[inputName], inputValue, inputName);
};

// Validación del formulario
export const validateForm = (e) => {
    const inputsLength = inputLength();
    const usernameLength = inputsLength.username;
    const firstnameLength = inputsLength.firstname;
    const emailLength = inputsLength.email;
    const form = document.getElementById('form');

    if (!validateAllInputsLength(usernameLength, firstnameLength, emailLength)) {
        e.preventDefault();
        console.log("No se puede enviar el formulario con errores");
    } else {
        e.preventDefault();
        form.reset();
        console.log("El formulario se ha enviado correctamente");
    }
};

// Función que me devuelve el length de los inputs
const inputLength = () => {
    return {
        username: document.getElementById("username").value.length,
        firstname: document.getElementById("firstname").value.length,
        email: document.getElementById("email").value.length,
    };
};

// Función que me devuelve un objeto con las expresiones regulares
const regexExpression = () => {
    return {
        username: /^[a-zA-Z0-9\_\-]{4,16}$/,
        firstname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };
};

// Función que valida el length de todos los inputs
const validateAllInputsLength = (
    usernameLength,
    firstnameLength,
    emailLength
) => {
    const usernameValidation = usernameLength >= 4 && usernameLength <= 16;
    const firstnameValidation = firstnameLength >= 3 && firstnameLength <= 40;
    const emailValidation = emailLength > 0;

    if (usernameValidation && firstnameValidation && emailValidation) {
        document.getElementById('success_message').classList.remove("hidden");
        document.getElementById('error_message').classList.add("hidden");
        return true;
    } else {
        document.getElementById('error_message').classList.remove("hidden");
        return false;
    }
};

// Validar los inputs con las expresiones regulares
const validateRegex = (expression, input, field) => {
    if (expression.test(input)) {
        document.querySelector(`#container__${field} i`).classList.add("op-0");
        document
            .querySelector(`#container__${field} p`)
            .classList.add("hidden");
    } else if (input === "") {
        document.querySelector(`#container__${field} i`).classList.add("op-0");
        document
            .querySelector(`#container__${field} p`)
            .classList.add("hidden");
    } else {
        document
            .querySelector(`#container__${field} i`)
            .classList.remove("op-0");
        document
            .querySelector(`#container__${field} p`)
            .classList.remove("hidden");
    }
};

// Función para generar los eventos
export const eventListener = (input, func) => {
    input.addEventListener("keyup", func);
    input.addEventListener("blur", func);
};

// Función para enviar el formulario
export const sendForm = (form, func) => {
    form.addEventListener("submit", func);
};
