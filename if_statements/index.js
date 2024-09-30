// IF statements - if a condition is true then execute some code and if it isnt true then execute something else.

// let age = 25;
// let age = 14; 

// if (age >= 18){
//     console.log("you are allowed to access this website");
    
// }

// else{
//     console.log("you are not allowed to see this website");
    
// }

// let time = 9;
let time = 14;

if (time < 12){
    console.log("good morning");
    
}

else{
    console.log("good afternoon");
    
}

// let isStudent = false;
let isStudent = true ;

if (isStudent){
    console.log("you are a student");
    
}

else {
    console.log("you are not a student");
    
}

 let age = 16;
 let hasLicense = false;

 if (age>=18){
     console.log("you are old enough to have license in india");
    
     if(hasLicense){
         console.log("you have your driving license");
        
     }
     else{
         console.log("you dont have your driving license yet");
        
     }
   }
 else {
     console.log("you need to be 18+ to have license in india");
    
}

// let ageNum = 18 ;
// let ageNum = -1 ;
// let ageNum = 101;
// let ageNum = 0;

// if (ageNum>=18){
//     console.log("you are allowed to enter this website");
    
// }
// else if(ageNum == 0){
//     console.log("you are not allowed, you were just born.");
    
// }
// else if(ageNum<0){
//     console.log("what are you? how can someone age be negative");
    
// }
// else if(ageNum>=100){
//     console.log("you are too old to view this website");
    
// }
// else {
//     console.log("you are not 18+");
    
// }
// NOTE :- 
// 1. if statements follows series and indetation 
// 2. conditions are checked from top to bottom 
// 3. if a top condition is already true then all the other conditions will be false
// 4. Comparison operator - is used to check if something is equal to smthng or not.


// project - take a input from the user to check his/her eligibilty for visiting this website.

const mylabel = document.getElementById("mylabel");
const myinput = document.getElementById("myinput");
const mybtn = document.getElementById("mybtn");
const myp = document.getElementById("myp");

let ageNum ;

mybtn.onclick = function(){
    
    ageNum = document.getElementById("myinput").value ; 
    ageNum = Number(ageNum) ; //since we have accepted a user input in form of string we have to convert it into number for if statements.

    if (ageNum>=18){
        // console.log("you are allowed to enter this website");
        document.getElementById("myp").textContent = `you are allowed to enter this website`;
        
    }
    else if(ageNum == 0){
        // console.log("you are not allowed, you were just born.");
        document.getElementById("myp").textContent = `you are not allowed, you were just born`;
        
    }
    else if(ageNum<0){
        // console.log("what are you? how can someone age be negative");
        document.getElementById("myp").textContent = `what are you? how can someone age be negative`;
    }
    else if(ageNum>=100){
        // console.log("you are too old to view this website");
        document.getElementById("myp").textContent = `you are too old to view this website`;
    }
    else {
        // console.log("you are not 18+");
        document.getElementById("myp").textContent = `you are not 18+`;
    }
}

