// create a traffic light system that shows what to do based on color

let light1 = "green";


if(light1 === "red"){
    console.log("stop! dont move");
    
}
if(light1 === "yellow"){
    console.log("wait a lil bit");
    
}
if(light1 === "green"){
    console.log("go ahead");
    
}

// popcorn services

let popPrice = "rs100";
if(popPrice === "rs250"){
    console.log("size is XL");
}else if(popPrice === "rs200"){
    console.log("size is L");
}else if(popPrice === "rs100"){
    console.log("size is M");
}else if (popPrice === "rs50"){
    console.log("size is S");
}else{
    console.log("you have not chosen your popcorn jar size");
}

// write a program for good string

let goodStr = "shubham"
if(goodStr[0] === "a" && goodStr.length > 3){
    console.log("the following str is good string");
}else{
    console.log("given str is not a good string");
}

// qs-1
let num = 10;
if(num %10 == 0){
    console.log("the number given is good number");
}else{
    console.log("the givrn number is bad number");
}
//  qs -2
// let firstName = prompt("what is your name?");
// let age = prompt("what is your age");
// alert(`the name of the user is ${firstName} and his age is ${age} years old`);

// qs-3
let months = 4;

switch (months){
    case 1:
        console.log("quarter 1 : january,february,march");
        break;
    case 2:
        console.log("quarter 2: april,may,june");
        break;
    case 3:
        console.log("quarter 3: july,august,september");
        break;
    case 4:
        console.log("quarter 4: october,november,decmeber");
        break;
        
}

// qs-4
let str = "aviral";
if((str[0] == "A" || str[0] == "a") && str.length > 5){
    console.log("given string is golden string");
}else{
    console.log("given string in not golden string");
}
// qs-5 write a program to find the largest of 3 numbers {revision}
let  a = 5;
let  b = 110;
let c = 15;
if (a > b){
    if(a > c){
        console.log("a is the largest");
    }else{
        console.log("c is the largest");
    }
}else {
    if(b > c){
        console.log("b is the largest");
    }else {
        console.log("c is the largest");
    }
}

// q-6 write a program to check if the last digit of the two numbers are same or not
let A = "1567";
let B = "2687";
if(A[3] == B[3]){
    console.log("last  digit of the given numbers are same");
}else{
    console.log("last  digit of the given numbers are not same");
}

// q-6 alternative code
let num1 = 9876;
let num2 = 4356;

// convert numbers into strings to access the last digit
let numStr1 = num1.toString();
let numStr2 = num2.toString();

// access the last digit of both the numbers
let lastDigit1 = numStr1[numStr1.length - 1];
let lastDigit2 = numStr2[numStr2.length - 1];

if (lastDigit1 === lastDigit2){
    console.log("the given two numbers have same last digit");
}else{
    console.log("the given two numbers dont have same last digit");
}

// 



