// in js method is a function of a object which means the object can be called with the help of method.

// 1st method
function greet() {
    return `hello my name is ${person.name} & i am ${person.age} years old`;

}
const person = {
   name: "shubham",
   age: 19,
   greet,
};
console.log(person.greet());

//  2nd method - most used methods
const person1 = {
    name: "shubham",
    age: 19,
    greet: function(){
        return `hello my name is ${person1.name} & my age is ${person1.age} years old`;
    }
}

console.log(person1.greet());


