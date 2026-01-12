const input = document.getElementById("username");
const message = document.getElementById("message");

input.addEventListener("input", function () {
    if (input.value.length < 5) {
        message.textContent = "Username must be at least 5 characters";
        message.style.color = "red";
    } else {
        message.textContent = "Username looks good 👍";
        message.style.color = "green";
    }
});
