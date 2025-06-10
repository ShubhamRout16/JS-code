// arrays methods
const arr1 = ["shubham","rout","is","here"];
const arr2 = ["shubham","rout","was","not","here"];
// adding two arrays
// arr1.push(arr2);
// console.log(arr1);
// push adds elements to same array but has a problem that array is inside of array

const arr3 = arr1.concat(arr2);
// console.log(arr3);
// concat makes a new array by combinig both the arrays

// spread method -> mostly used
const arr4 = [...arr1,...arr2];
// console.log(arr4);

console.log(Array.isArray("shubham"));
console.log(Array.from("shubham")); // creates new array of each alphabet
console.log(Array.from({name: "shubham"})); //generally asked in interviews -> gives us an empty array

// to make array using different set of elements -> elements can be anything
let score1 = 100;
let score2 = 120;
let score3 = 140;
console.log(Array.of(score1,score2,score3));
