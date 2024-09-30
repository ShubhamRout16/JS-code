//  random number generator
// Math.random provides any random number between 0 and 1
// let randomNum = Math.random(); 


// now if we want to generate a random number between 1 to 6
// 1. first generate random nums btwn  0 to 5 then 1 to 6

// let randomNum = Math.floor(Math.random() * 6) + 1;
// now remove decimal values
// now set the random values from 1 to 6

// now if i want to generate random numbers between a given set of range values such as 50 to 100
// const min = 50;
// const max = 100;


// let randomNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum);

// NOW RANDOM NUM GENERATOR 

const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomNum;

mybutton.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    document.getElementById("mylabel").textContent = randomNum;
}

