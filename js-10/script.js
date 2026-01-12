function checkAge() {
    const age = parseInt(document.getElementById("ageInput").value);
    const result = document.getElementById("result");

    if (isNaN(age)) {
        result.innerText = "Please enter a valid number.";
        return;
    }
    const message = isOldEnough(age);
    result.innerText = message;
}
function isOldEnough(age) {
    if (age >= 18) {
        return "✅ You are eligible to vote!";
    } else {
        return "❌ You are not eligible to vote yet.";
    }
}
