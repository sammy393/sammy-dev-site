const calculateTotal = (price, quantity) => {
    return price * quantity;
};
let appleTotal = calculateTotal(150, 3);
console.log(calculateTotal(150, 3));  //450
let orangeTotal = calculateTotal(100, 5);
console.log(calculateTotal(100, 5));  //500
let bananaTotal = calculateTotal(50, 7);
console.log(calculateTotal(50, 7));   //350
let totalBil = 450 + 500 + 350;
console.log("Total bill is: $" + 1300);

//day 8 coding challenge
const calculateBill = (food, drink, transport) => {
    return food, drink, transport
}
let total = calculateBill(500, 300, 200);
console.log("Total bill is: $" + 1000);