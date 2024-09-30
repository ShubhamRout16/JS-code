// ARRAYS - arrays are in which we can store multiple info in a single variables 
//          arrays are the zero based index which start from 0

const num = [1,2,3,4,5] ;
console.log(num);

const stringarr = ["shubam" , "rout" , "aviral" , "rudraksh" , "prabh"] ;
// accessing items from array
console.log(stringarr[0]); 
console.log(stringarr[2]);
console.log(stringarr[4]);
console.log(stringarr[1]);

// nested array 
const nestarr =[0 , ["shubham", "rout"],1 ,3, 4]
console.log(nestarr[1][1]);

// create array name (favsingers) store 3 favorite singers
const favsingers = ["anuv jain" , "darshan raval" , "central cee"];
// log the first singer in that array
console.log(favsingers[0]);
// create array name ("favNumbers") store 4 fav numbers
const favNumbers = [2, 1, 0 ,7];
const mixedArr = ["string" ,["otherarray"],123 ,true];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

// ! arrays are mutable 
let fruits = ["banana", "mango","apple"];
fruits[0] = "litchi";
console.log(fruits);

fruits[10] = "papaya";
console.log(fruits);
// * OUTPUT: [ 'litchi', 'mango', 'apple', <7 empty items>, 'papaya' ]

// ! arrays me next 10 ke baad v indexing me value add ho gyi ha but beech ke jitne v indexing ha wo empty rhegi but wo indexing length ki value me add hoyegii.

console.log(fruits.length); //output: 11 //* wo beech ke khali indexes length me add ho gaye ha but unme koi value added nhi ha agar usko access krenge toh baad me wo undefined output show krega

console.log(fruits[7]);//! output: undefined

// TODO-1 
let start =['january', 'july', 'march', 'august'];
let newStart = start.shift();
console.log(newStart);
console.log(start);
let newStart2 =start.shift();
console.log(start);
let newStart3 = start.unshift("june");
console.log(start);
let newStart4 = start.unshift("july");
console.log(start);








