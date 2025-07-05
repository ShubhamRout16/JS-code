// function x(y){
//   y(); // later using the fn
// }

// x(function y(){
//   console.log("hello world");
// })
setTimeout(function(){
  console.log("timer");
},5000)

function x(y){
  console.log("a")
  y(); // later using the fn
}

x(function y(){
  console.log("b");
})