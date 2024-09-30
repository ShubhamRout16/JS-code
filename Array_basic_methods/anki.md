// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit",
  ];
//   console.log(fruits);
  fruits.push("watermelon");
//   console.log(fruits);
  fruits.pop();
//   console.log(fruits);
fruits.shift();
// console.log(fruits);
fruits.unshift("guava");
// console.log(fruits);

const pl1 = ["javascript", "php" ,"python"];
const pl2 = ["c++" , "c" , "flutter"];
const pl3 = pl1.concat(pl2);
// console.log(pl3);

// join - creates string from array
// reverse - reverse an array
// slice - copy portion of an array
// sort - sorts an array    

const frnds = ["shubham" , "nitin","yuvraj" ,"shivam","sahu"];
const numbers = [9,5,2,4];

// numbers.join("-");
// num2 = numbers.reverse() ;
// console.log(num2);
// num3 = numbers.slice(0,2)
// console.log(num3);

num4 = numbers.sort();
// console.log(num4 );



// Task-
// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

// concat()
const name1 =["shubh" , "rudraksh" ];
const name2 =["prabh" , "aviral"];

name3 = name1.concat(name2);
// console.log(name3);

// includes()
const name = ["shubham rout"];
name.includes("bham");

// splice()
const months = ["jan" , "march","may","june"];
months.splice(1 , 0 ,"feb");

months.splice(3,0,"april");
console.log(months);


// ! indexOf method in array searchs and returns the index of the value if found
// ! if not found => -1
// ! includes method in array searchs for and return the boolean values
// ! if found => true , not found => false


// * concatenation in arrays - uses "concat" keyword and it does not make changes in the original array
// * in concat method the order of the arrays matter.
// * if arr1 is first used and then arr2 is used as arguement then the arr2 will attach at the end of arr1.
// ! reverse method in arrays - is used to reverse the array and it chnages the original array 

// ! if index given during the slicing of the array is greater than the given length of the array then it will return empty arry => []
// ! slice does not make any changes in the original arrays


// ! SPLICE => can be used a slice only , can be used to add and replace elements in place
// * splice make changes in the original array
// * splice make changes and returns the value

// * pseudo code of SPLICE => splice(start,deleteCount,item0......itemN);
// eg 1
let cars = ["toyota","bmw","audi","dodge","thar","gwagon"];
// used as slice
console.log(cars.splice(4));
// makes changes in the original arrays.
console.log(cars);
// using splice to remove elements from array => zero index pe jake 1 element ko remove kra
console.log(cars.splice(0,1));
// 0 index pe jake kuch delete nhi krna ha aur phir gwagon add krdo 
console.log(cars.splice(0,0,"gwagon"));

// ! SORT => arrange the given array in ascending or descending order
// eg 
let days = ["monday","tuesday","wednesday","sunday"];
console.log(days.sort()); //* sorted in ascending order of alphabets

// eg 
let num = [100,65,82,99];
console.log(num.sort()); //* numbers are sorted in random order

// ! working process of sort method in array => first converts arrays in strings => then sorts accordingly.

// TODO-1
let month = ["january","july","march","august"];
let newMonth = month.splice(0,2,"july","june");
console.log(month);

// TODO-2
let lang = ["c", "c++","html","javascript","python","java","c#","sql"];
let langReversed =lang.reverse();
console.log(langReversed);
console.log(langReversed.indexOf("javascript"));




