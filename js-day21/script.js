//rounding examples
console.log("Round 4.7:", Math.round(4.7));
console.log("Floor 4.7:", Math.floor(4.7));
console.log("Ceil 4.1:", Math.ceil(4.1));
//Random number between 0 and 1
console.log("Random:", Math.random());
//Random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("random 1-10:", randomNum);
//power and sqaure root
console.log("2^3 =", Math.pow(2, 3));
console.log("Square root of 25 =", Math.sqrt(25));

// Generate random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Ask user for a guess
let guess = prompt("Guess a number between 1 and 100:");

// Convert input to number
guess = Number(guess);

// Compare guess with secret number
if (guess === secretNumber) {
    alert("🎉 Correct! You guessed the number.");
} else if (guess > secretNumber) {
    alert("📉 Too high! The number was " + secretNumber);
} else {
    alert("📈 Too low! The number was " + secretNumber);
}

//Part 2 function
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 7));  // should print 12

function multiplyNumbers(x, y) {
    return x * y;
}
console.log(multiplyNumbers(80, 6));    // should print 480

function calculateBill56(amount, taxRate) {
    return amount + taxRate;
}
console.log(calculateBill(200, 0.07));  // should print 200.01
