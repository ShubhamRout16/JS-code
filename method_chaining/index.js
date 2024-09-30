// METHOD CHAINING - calling one method after another in a continous line of code is called method chaining.

// we have to write a code where we will take a input from the user and then uppercase the first letter and then lowercase the rest of the part and then take output of it and show it together.

// WITHOUT CHAINING METHOD

let username = window.prompt("enter the username :");

let first = username.trim();
let firstLetter = first.charAt(0);
let capitalize = firstLetter.toUpperCase();

let trim1 = username.trim()
let last = trim1.slice(1);
let small = last.toLowerCase();

let completeUsername = capitalize + small ; // here the order of concatenation should be correct for string

console.log(completeUsername);
