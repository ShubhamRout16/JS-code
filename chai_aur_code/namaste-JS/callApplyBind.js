let name ={
  firstName: "shubham",
  lastName: "rout",
  printFullName: function (hometown,state){
    console.log(this.firstName + " " + this.lastName + "from" + hometown + state)
  }
}
// invoking the function
name.printFullName();

let name2 = {
  firstName: "babu",
  lastName: "rout",
}

// call method is used for function borrowing -> when we want to use a function from another object
name.printFullName.call(name2 , "jharkhand") //first parameter is where we want our this keyword to point to

function printReverseName(){
  console.log(this.lastName + " " + this.firstName)
}

// if we want to use this function then we can also do this by using call method
printReverseName.call(name)
printReverseName.call(name2)

// now lets talk about apply method
// the only difference between apply and call method is that
// in apply method we send arguements combined in array

name.printFullName.apply(name2 , ["ranchi","jharkhand"])

// now lets talk about bind method
// instead of directly calling it bind methods binds the function with the passed object and
// returns the copy of the object and let it run in the future
let myName = name.printFullName.bind(name2, ["ranchi" , "jharkhand"])
console.log(myName)
myName()