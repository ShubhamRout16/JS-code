// -------------------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

// declaring a function greet()

function greet(){
    console.log("shubham rout");
    
}

greet(); //calling a function 

function sayHello(username){
    console.log(`hello ${username}`);
    
}
sayHello("shubham rout");

// return statement can be used to return the value when the function is called
function num(num1,num2){
    return num1 + num2;
    
}
const num3 = num(10,20)
const num4 = num(100,200)
const num5 = num(1000,2000)

console.log(num3);
console.log(num4);
console.log(num5);

/*function abc(parameter){
    return abc;

}
abc(argument)

parameter - parameter are in which the user value will be accepted 
arguments -  argueemnts are in through which user sends the value while calling a function.
*/

// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(a,b){
     return a * b //this function returns the product of a & b
}
const c = myFunction(6,7)
console.log(c);
