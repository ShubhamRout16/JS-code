// IIFE -> Immediately invoked function expressions
// jo function immediately invoke hjaye connect hote hi -> ex if connected to database it should be invoked immediately
// interviewer interest -> iife saves the function from geeting polluted by global scope variable or other context of the global scope

// how to use iife?
// (function definiton)(function execution)

// NAMED IIFE
(function name(){
  console.log("shubham rout");
})(); // for explicitly ending the code we have to use semicolon (;) or otherwise the next iife code wont run

// HOW TO WRITE ARROW IIFE
(() => {
  console.log("shubham rout 2.0");
})();

// HOW TO PASS PARAMETER IN IIFE
((title) => {
  console.log(`shubham ${title}`);
})("rout")