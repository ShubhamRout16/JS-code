// logical operators !
// 1. logical AND (&&)
// -> TRUE if both the booleans/operands are TRUE and evaluates FALSE if even one of them is FALSE

const a = true;
const b = false;
const c =  5;

// console.log(a && b);
// console.log(b && b);
// console.log(a && a);
// console.log(c>2 && c<2);

// 2. logical OR (||)
// -> TRUE if either of the operands/booleans are TRUE and evaluates FALSE if both of them are FALSE

console.log(a || b);
console.log(b || b);
console.log(a || a);
console.log(c>2 || c<2);

// 3. logical NOT (!)
// -> TRUE if the operands is FALSE and vice-versa . it works like a toogle if it is true it converts it into false and if it is false then it converts it into false.

console.log(!a);
console.log(!b);

let password = "shubham-rout";

if(password.length >= 2 && password.includes("rout")){
    console.log("valid-password");
    
}
else {
    console.log("not valid-password");
    
}
