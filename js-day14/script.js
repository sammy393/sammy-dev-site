//funtion Decleration
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Sammy")); //Hello, Sammy!
//Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 7)); //12
//arrow funtion
const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); //24
//Default Parameters
function welcome(name = "Guest") {
    return `Welcome, ${name}`;
}
console.log(welcome()); //welcome, Guest 
console.log(welcome("John"));   //Welcome, John 
//factorial using loop
function factorialLoop(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

//factorial using Recursive
function factiorialRecursive(n) {
    if (n === 0 / n === 1) {
        return 1;   // base case
    } else {
        return n * factiorialRecursive(n - 1); // recursive call
    }
}
//Testing both 
console.log("Loop version (5):", factorialLoop(5)); // 120
console.log("Recursive version (5):", factiorialRecursive(5));  //120
console.log("Loop version (7):", factorialLoop(7)); //5040
console.log("Recursive version (7):", factiorialRecursive(7));  //5040