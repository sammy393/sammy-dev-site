const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
form.addEventListener("submit", function (e) {
    e.preventDefault(); //stop page from refreshing

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username.value === "" || email.value === "" || password.value === "") {
        message.textContent = "All fields are required ❌";
        message.style.color = "red";
    } else if (!emailPattern.test(email.value)) {
        message.textContent = "Please enter a valid email address ❌";
        message.style.color = "red";
    } else if (password.value.length < 6) {
        message.textContent = "Password must be at least 6 characters ❌";
        message.style.color = "red";
    } else {
        message.textContent = "Form submitted successfully ✅";
        message.style.color = "green";
        // Here you can add code to actually submit the form data
    }
    const strength = document.getElementById("strength");
    if (password.value.length < 6) {
        strength.textContent = "Weak Password";
        strength.style.color = "red";
    } else if (password.value.length < 10) {
        strength.textContent = "Moderate Password";
        strength.style.color = "orange";
    } else {
        strength.textContent = "Strong Password";
        strength.style.color = "green";
    }
    const toggle = document.getElementById("toggle");
    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
            toggle.textContent = "Show/Hide";
        }
        function validateEmail() {
            if (email.value.includes("@") && password.value.length >= 6) {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
                message.textContent = "fill form correctly";
            }
            email.addEventListener("input", validateEmail);
            password.addEventListener("input", validateEmail);
        }
    });
    function saveData() {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("email", email.value);
    }
    submitBtn.addEventListener("click", saveData);
    window.addEventListener("load", function () {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = this.localStorage.getItem("password");
        if (savedEmail && savedPassword) {
            email.value = savedEmail;
            password.value = savedPassword;
            validateform();
        }
    })
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", function () {
        localStorage.clear();
        email.value = "";
        password.value = "";
        submitBtn.disabled = "";
        message.textContent = "Logged out successfully";
    })
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";
        }
    });
    //Apply saved theme on load
    window.addEventListener("load", function () {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            themeToggle.textContent = "Light Mode";
        }
    })
});