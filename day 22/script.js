function add() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (n1 + n2);

}
function subtract() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (n1 - n2);

}
function multiply() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (n1 * n2);

}
function divided() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    if (n2 === 0) {
        document.getElementById("result").innerText = "Result: Cannot divide by zero!";
    } else {
        document.getElementById("result").innerText = "Result: " + (n1 / n2);
    }
}