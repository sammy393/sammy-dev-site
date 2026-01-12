//while loop basics
let count = 1;
while (count <= 10) {
    console.log("Count is:" + count); count++;
}
// D0.... while Loop
let num = 10;
do {
    console.log("Number is:" + num); num--;
} while (num >= 1);
//Nested loops
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}