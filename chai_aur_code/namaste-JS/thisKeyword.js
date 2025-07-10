"use strict"

console.log(this)

function x(){
  console.log(this)
}
x();
window.x()

// this inside of an objects method
// what is the difference between function and method
// if a function is called inside of an object then it is called as method
// now x is called a method of object obj
const obj = {
  a : 10,
  x: function(){
    console.log(this) // the value of this inside of obj is obj itself
    console.log(this.a) // it will return value 10
  }
}
obj.x()
// three important functions while learning htis keyword are call() , apply() , bind()