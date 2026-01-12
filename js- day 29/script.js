let count = 0;

function updateDisplay() {
    const countElement = document.getElementById("count");
    countElement.textContent = count;

    // Color based on value
    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }

    // Add animation class
    countElement.classList.add("pop");

    // Remove class after animation ends (so it can repeat)
    setTimeout(() => {
        countElement.classList.remove("pop");
    }, 300);
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}
