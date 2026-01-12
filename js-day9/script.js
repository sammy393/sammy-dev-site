function changeText() {
    const heading = document.getElementById("mainText");
    heading.innerText = "You clicked the button!";
}
function greetUser() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greetingText");
    greeting.innerText = `Welcome, $ {name}!`;
}