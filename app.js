const submitButton = document.getElementById("submitButton")
const nameInput = document.getElementById("name")
const surnameInput = document.getElementById("surname")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const confirmInput = document.getElementById("confirm")
const formContainer = document.querySelector(".form");
const submitField = document.querySelector(".submit-field")

isValidChecker = (input) => {
    
    let isError = false;

    if (input.name === "") {
        let p = document.createElement("p");
        p.textContent = "Name is mandatory field"
        p.classList.add("error");
        insertAfter(p, nameInput);
        isError = true;
    }
    if (input.surname === "") {
        let p = document.createElement("p");
        p.textContent = "Surname is mandatory field"
        p.classList.add("error");
        insertAfter(p, surnameInput)
        isError = true;
    }
    if (input.email === "") {
        let p = document.createElement("p");
        p.textContent = "Email is mandatory field"
        p.classList.add("error");
        insertAfter(p, emailInput)
        isError = true;
    }else if (!validateEmail(input.email)) {
        let p = document.createElement("p");
        p.textContent = "Email is not valid"
        p.classList.add("error");
        insertAfter(p, emailInput)
        isError = true;
    }
    if (input.password === "") {
        let p = document.createElement("p");
        p.textContent = "Password is mandatory field"
        p.classList.add("error");
        insertAfter(p, passwordInput)
        isError = true;
    } else if (!validatePassword(input.password)) {
        let p = document.createElement("p");
        p.textContent = "Password must be at least 8 characters long and have one uppercase letter"
        p.classList.add("error");
        insertAfter(p, passwordInput)
        isError = true;
    }
    if (input.confirm === "") {
        let p = document.createElement("p");
        p.textContent = "Confirm password is mandatory field"
        p.classList.add("error");
        insertAfter(p, confirmInput)
        isError = true;
    } else if (input.confirm !== input.password) {
        let p = document.createElement("p");
        p.textContent = "Passwords must be same"
        p.classList.add("error");
        insertAfter(p, confirmInput)
        isError = true;
    }
    
    if (!isError) {
        submitField.innerHTML = "Your sign-up form is submitted 👍";
        submitField.style.display = "block";
    } 
}

submitButton.onclick = () => {

    // claring errors first
    document.querySelectorAll('.error').forEach(e => e.remove());
    submitField.style.display = "none"; 

    const input = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        confirm: confirmInput.value
    }

    
    let isValid = isValidChecker(input);
    console.log(input)


    if (isValid) {
        const data = {
            name: nameInput.value,
            surname: surnameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }
        console.log(data);
    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(pass) {
    if (pass.length < 8) return false
    if (!/[A-Z]/.test(pass)) return false
    return true
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}