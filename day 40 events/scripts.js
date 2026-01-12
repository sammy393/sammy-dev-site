// 1. select element
const button = document.getElementById("btn");
const text = document.getElementById("text");
//2. add event listener
button.addEventListener("mouseover", function () {
    text.textContent = "You mouseover the button";
});

// slect elements
const input = document.getElementById("inputText");
const output = document.getElementById("output");
//listen for input event
input.addEventListener("input", function () {
    output.textContent = input.value;
});
console.log()