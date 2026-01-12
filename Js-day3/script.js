// Declare varibles
let name = "Sammy";
const age = 25;
let isDeveloper = true;
let score = null;
let salary;

console.log(typeof name);   // string
console.log(typeof age);    // number
console.log(typeof isDeveloper);    // boolean
console.log(typeof score);    // object (a quirk of JavaScript)
console.log(typeof salary);    // undefined

// Array and object
let Student = {
    name: "Samuel",
    age: 21,
    gender: "Male",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    isGraduate: false
};
let user = {
    name: "Sammy",
    level: "Beginner",
    country: "Nigria"
};

console.log(Student.skills[0]);  // HTML
console.log(user.name); // Sammy
console.log(Student.name); // Samuel
console.log(Student.isGraduate) // false