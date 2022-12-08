export const validateInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    const regex = regexExpression();
    validateRegex(regex[inputName], inputValue, inputName);
};

const regexExpression = () => {
    return {
        username: /^[a-zA-Z0-9\_\-]{4,16}$/,
        firstname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };
};

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
        console.log("Minimo 4 caracteres");
    }
};

export const eventListener = (input, func) => {
    input.addEventListener("keyup", func);
    input.addEventListener("blur", func);
};
