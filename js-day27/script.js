// Select elements
let title = document.getElementById("main-title");
let description = document.querySelector("#description");
let changeTextBtn = document.getElementById("changeTextBtn");
let changeColorBtn = document.getElementById("changeColorBtn");

// Change text when button is clicked
changeTextBtn.addEventListener("click", function () {
    title.textContent = "You just changed the title! 🎉";
    description.textContent = "DOM is powerful!";
});

// Change color when button is clicked
changeColorBtn.addEventListener("click", function () {
    title.style.color = "crimson";
    description.style.color = "green";
});
