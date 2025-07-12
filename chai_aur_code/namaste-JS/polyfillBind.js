// first lets see how to use bind method
let name  = {
  firstName: "shubham",
  lastName: "rout",
}

let printName = function(hometown , state){
  console.log(this.firstName + " " + this.lastName + " , " + hometown + " , " + state)
}

let printMyName = printName.bind(name , "ranchi")
printMyName("Jharkhand") 

// lets create our own bind method
Function.prototype.mybind = function(...args){
  let obj = this
  params = args.slice(1)
  return function(...args2){
    obj.apply(args[0] , [...params, ...args2])
  }
}
let printName2 = printName.mybind(name , "ranchi");
printName2("Jharkhand");





// so lets first analyze browsers bind method
// every function has a access to the bind method -> use prototype on mybind
// when we call printName.bind it returns a functions to us
// and whenever call the returned function it executes the printName function


let sups = {
  firstName: "Captain",
  lastName: "America",
}

let printSups = function(universe){
  console.log(this.firstName + " " + this.lastName + " " + universe)
}

Function.prototype.myBind = function(...arguement){
  let obj = this
  params = arguement.slice(1)
  return function(...arguement2){
    obj.call(arguement[0] , [...params , ...arguement2])
  }
}

let supsName = printSups.myBind(sups , "Marvel")
supsName("One of the Avengers")