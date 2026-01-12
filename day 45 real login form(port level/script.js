const form = document.getElementById("loginForm");
const user = document.getElementById("loginUser");
const pass = document.getElementById("loginPass");
const message = document.getElementById("message");

const correctUser = "admin";
const correctPass = "123456";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (user.value === correctUser && pass.value === correctPass) {
        message.textContent = "Login successful ✅";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid username or password ❌";
        message.style.color = "red";
    }
});
