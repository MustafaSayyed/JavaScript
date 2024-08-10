// Arrays in JS
// In JavaScript 
// Strings are Immutable and 
// Arrays are mutable 

// let arr = [12, 45, 34, 56, 29, 99];
// console.log(arr);
// console.log(`The Length of Array is: ${arr.length}`); // length is a property in JS

// Printing all elements of array
// console.log("Printing all elements of Array:");
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Sum of all elements in Array
// let sum = 0;
// console.log("Adding all elements of array:");
// for(let val of arr) {
//    sum += val;
//    console.log(sum);
// }

// console.log(`The sum of ${arr} is ${sum}`);
// let avg = sum/arr.length;
// console.log(`The Average of all numbers is: ${avg}`);


// Arrays Methods
let heros = ["Thor", "Hulk", "Spiderman"];
console.log(heros.push( "ironman", "Antman"));
heros.pop();
let stringArray = heros.toString(); // this method returns a new array, it doesn't change in original array
console.log(stringArray);
console.log(heros);

// Points of this lesson
// push() and unshift() methods return the length of array 
// pop() and shift() methods return deleted element of array

console.log(heros.unshift("Dr. strange"));
console.log(heros.shift());
console.log(heros.concat(arr = [23, 34]));



let numbers = [12, 34, 56,23, 45, 67];
console.log(numbers.slice(0, 3 /*Ending index*/)); 
// this method create a new array, it doesn't change original array
// the ending index we are passing in this method is non-inclusive means it will return value of 0, 1 and 2 index of array

numbers.splice(0, 2, 99, 199,);
console.log(numbers); 
// this method perform operation on original array
// this method can be used to delete, add, replace values of array