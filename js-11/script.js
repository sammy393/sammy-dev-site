let username = " Sammy JavaScript Hero ";
console.log("Original string:", username);
//length
console.log("length:", username.length);
//Trim
let trimmed = username.trim();
console.log("Trimmed:", trimmed);
console.log("New Length:", trimmed.length);
//To uppercase and lowercase
console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());
//Slice and substring
console.log("Slice (0, 5)/;", trimmed.slice(0, 5));
console.log("Substring (7, 17):", trimmed.substring(7, 17));
//Replace
console.log("Replace 'Hero' with 'Master':", trimmed.replace("Hero", "Master"));
//Includes
console.log("Includes 'JavaScript':", trimmed.includes("JavaScript"));
//Startswith & Endwith
console.log("Starts with 'Sammy':", trimmed.startsWith("Sammy"));
console.log("Ends with 'Hero':", trimmed.endsWith("Hero"));
//IndexOf
console.log("Index of ;'a':", trimmed.indexOf("a"));
console.log("Last index of 'a':", trimmed.lastIndexOf("a"));
//Slipt
let words = trimmed.split(" ");
console.log("Split words:", words);
