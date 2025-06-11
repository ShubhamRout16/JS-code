// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}

// how to check if an array is empty
const userName = [];

if(userName.length === 0){
  console.log("array is empty");
}

// how to check if object is empty
// Object.keys(object variable name) -> converts into array
const userObj = {}

if(Object.keys(userObj).length === 0){
  console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 10 ?? 2 //jo value pehle milti ha wo assign ho jati ha
// val1 = null ?? 20
// val1 = undefined ?? 30
// val1 = null ?? 69 ?? 10 //jo value pehle milti ha wo assign krdeti ha
// console.log(val1);


// Terniary operator

// basic syntax : condition ? true  : false

const coursePrice = 1000

coursePrice <= 500 ? console.log("papa de denge paisa") : console.log("papa nhi denge paisa");


