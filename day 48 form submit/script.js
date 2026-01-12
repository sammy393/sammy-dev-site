const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
form.addEventListener("submit", function (e) {
    e.preventDefault(); //stop page from refreshing

    if (username.value === "" || password.value === "") {
        message.textContent = "All fields are required ❌";
        message.style.color = "red";
    } else if (password.value.length < 6) {
        message.textContent = "Password must be at least 6 characters ❌";
        message.style.color = "red";
    } else {
        message.textContent = "Form submitted successfully ✅";
        message.style.color = "green";
        // Here you can add code to actually submit the form data
    }
});