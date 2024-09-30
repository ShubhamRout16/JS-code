// ------------------------
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}
// ------------------------

// ------------------------
// Creating Object
let person = {
    firstname: "shubham",
    lastname: "rout",
    age: 19,
    location: ["planet" , "earth"],
    isProgrammer: true,
};

//Adding new properties and values to  the object
person.isStudent = true ;
person.hasGirlfriend = false ;
// console.log(person);

// Accessing properties
// #1 dot method
console.log(person.hasGirlfriend);
console.log(person.lastname);
// #2 brakcets method
console.log(person["location"][1]);
console.log(person["isProgrammer"]);
// console.log(person[isProgrammer]); // ERROR -> without quotes

// Updating properties
console.log(person.firstname = "nitin");
console.log(person.location = ["planet" , "mars"]);

//  TASK !
// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

let car = {
    type: "suv",
    model: "audi q8",
    color: "golden",
} //1&2

console.log(typeof car); //3
console.log(car.type = "toyota"); //4

console.log(car.wheels = " "); //5
console.log(car); //6










