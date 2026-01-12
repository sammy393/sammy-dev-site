const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// On submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateName();
    validateEmail();
    validatePassword();

    if (isFormValid()) {
        alert("Form submitted successfully ✅");
    }
});

// Live validation as user types
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function validateName() {
    if (nameInput.value.trim() === "") {
        setError(nameInput, "Name is required");
    } else {
        setSuccess(nameInput);
    }
}

function validateEmail() {
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        setError(emailInput, "Enter a valid email");
    } else {
        setSuccess(emailInput);
    }
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        setError(passwordInput, "Password must be at least 6 characters");
    } else {
        setSuccess(passwordInput);
    }
}

function setError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector(".error");
    error.textContent = message;
    input.classList.add("error-border");
    input.classList.remove("success-border");
}

function setSuccess(input) {
    const group = input.parentElement;
    const error = group.querySelector(".error");
    error.textContent = "";
    input.classList.add("success-border");
    input.classList.remove("error-border");
}

function isFormValid() {
    return (
        !nameInput.classList.contains("error-border") &&
        !emailInput.classList.contains("error-border") &&
        !passwordInput.classList.contains("error-border")
    );
}
