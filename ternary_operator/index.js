// ternary operator - a shortcut to if and else statements helps to assign a vairable on condition
//                   condition ? codeIfTrue : codeIfFalse

// let age=12;
// let message = age>=18 ? "you are adult" : "you are minor";
// console.log(message);

// let time = 19;
// let greeting = time <= 18 ? "good afternoon" : "good evening";
// console.log(greeting);

// let isStudent =true;
// let message = isStudent ? "you are student" : "you are not student"; //in booleans while using ternary opeartors we directly write the name of vairable
// console.log(message);


let purchaseAmount = 150;
let discount = purchaseAmount>= 100 ? 10 : 0;
console.log(`your purchaseAmount is ${purchaseAmount - purchaseAmount * (discount/100)}RS `);
 
// you need to check if the amount is above 100 rs then gice as discount of 10%