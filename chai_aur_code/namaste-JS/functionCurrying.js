// function currying using bind method
let mutliply = function(x , y){
  console.log(x * y)
}

let multipleByTwo = mutliply.bind(this , 2)
multipleByTwo(4)

let multipleByThree = mutliply.bind(this , 3)
multipleByThree(6)

// function currying using closure method
let multiplyByClosure = function(x){
  return function(y){
    console.log(x * y)
  }
}
let multiplyByFive = multiplyByClosure(5)
multiplyByFive(4)