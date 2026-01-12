const form = document.getElementById("myForm");
const input = document.getElementById("username");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page refresh
    output.textContent = "Hello, " + input.value;
});
console.log(input.value)