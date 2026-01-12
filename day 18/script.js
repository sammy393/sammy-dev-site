//slect element
let title = document.getElementById("title");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
//Add button click event
btn.addEventListener("click", function () {
    title.textContent = "Hello JavaScript!";
    text.style.color = "blue";
});