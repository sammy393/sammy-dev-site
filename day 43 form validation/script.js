const form = document.getElementById("myForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const error = document.getElementById("error");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload
    if (username.value.length < 3) {
        error.textContent = "Username must be at least 3 characters";
        error.style.color = "red";
        return;
    }
    if (password.value.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        error.style.color = "red";
        return;
    }

    error.textContent = "Form submitted successfully!";
    error.style.color = "green";
});

