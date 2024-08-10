// Strings in JavaScript
// In JS Strings are ' Immutable ' means original string cannot be changed 
// in-built methods or properties create a new string to perform specific task. it don't change original string

// let str1 = "Javascript";
// let str2 = 'Mustafa';

// console.log(str1.length);
// console.log(str1[0]);

// // String Interpolation OR Template Literals

// let age = 18;
// let name = "Mustafa";
// let branch = "Computer Engineering"
// console.log(`My Name is ${name} and i am ${age} years old. I study in ${branch} of Diploma`);


// let str = "Sayyed\nMustafa" // The Ouput is 14 because backslashes( \ ) is not counted in length
// console.log(str.length);
// let len = 0;
// for (const val of str) {
//     len++;
// }
// console.log(`The length of ${str} is ${len}`);


// String Methods

let string = " Sayyed Mustafa";

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());
console.log(string.charAt(10));
console.log(string.charCodeAt(10));
console.log(string.substring(15, 8));
console.log(string.slice(0, 7));
console.log(string.replace("Sayyed", "Sayyad"));
console.log(string.concat(" (The Programmer)"));
console.log(string.indexOf("a"));
console.log(string.lastIndexOf("a"));
console.log(string.startsWith("Mus", 8));
console.log(string.endsWith("yyed", 7));