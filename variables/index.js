// variable - variable are places where values are stored and when called they work as if they are the value, just imagine a like a box with name "A" and the value stored in it is "12" so here the box named A work as a variable.

/* there are two steps to use variable:
 1. declaration - let x be a variable;
 2. assignment - assign a value to the variable;
*/

// let x;
// x=12; (this is used for double line assignment of variable.)

// let x=100; 
// this is a single line assignment of variable.

// let age = 19;
// let weight = 56;
// let price = 100;
//{this the assignment of datatypes numbers} 

// console.log(age);
// console.log(weight); {this is how we simply show the output for any variable}

// console.log(`i am ${age} years old`);
// console.log(`i am ${weight} kilos`);
// console.log(`atta is of ${price}RS`);
// {this is how we use the variables to write in a sentence}


// STRINGS !!!

// let name = "ShubhamRout";
// let gmail = "shubhamrout90@gmail.com";
// let city = "jharkhand";

// console.log(name);
// console.log(typeof name);  {"typeof " is used to define the datatype}
// console.log(`hi myself ${name}`);
// console.log(`my contact is ${gmail}`);
// console.log(`i am from ${city}`);

// BOOLEANS !!

// let flat = true;
// let coming = false;
// {this is how booleans datatypes are used they are only genrally used in if or else statements}

// console.log(`is this apartment for sale ${flat}`);
// console.log(`is shubham coming for the party ${coming}`);

// EXERCISE - where we have to change the document content in our webpage by using variables.

/*
let fullName = "Shubham Rout";
let myAge = 19;
let inSchool = true;


document.getElementById("myp1").textContent = `my name is ${fullName}`;
document.getElementById("p2").textContent = `i am ${myAge} years old`;
document.getElementById("p3").textContent = `am i currently enrolled in college? : ${inSchool}`;

*/

const accountId = 95251532
let accountEmail = "shubhamrout90@gmail.com"
accountCity = "ranchi"
let accountState;
// this shows that if assign a variable and dont define it then its value will show "undefined"!!


// accountId = 18237283 { this cannot be changed since we have use const on variable accountId}

accountEmail = "90shubhamrout@gmail.com"
accountCity = "punjab"

console.log(accountId);

console.table([accountId, accountEmail, accountCity, accountState]);
// this console.table make its easier to show the output of various variables and it can be done in a single line.

console.log(typeof null);  //this will give a result of object !!VERY IMP FOR INTERVIEW PURPOSE
console.log(typeof undefined); //this will give output of undefined only.

//null = standalone value dataype
//object 
//symbol = unique datatype