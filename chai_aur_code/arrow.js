const student = {
  name: "shubham rout",
  roll_no: 1024030409,
  welcomeMessage : function(){
    // console.log(`${this.name} welcome to thapar university`); //this keyword works inside the context of the object
    // console.log(this); // will show the working of the context,inside the object
  }
}

student.welcomeMessage();
// if we change the context of the object
student.name = "shub"
student.welcomeMessage();
// the output given by this keyword is different inside of the object and outside of the object
// console.log(this); // will give empty object 
// this will also give different out while on the webpage it will give the window object
// this keyword output in node env -> empty object
// this keyword output in the webpage env -> window object


function name(){
  let student_name = "shubham";
  // console.log(this.student_name); // gives us undefined
}
name();
// so conclusion is -> this keyword works differently inside of the object and differnetly inside of the simple function

// const details = function(){
//   let name = "sakshi";
//   console.log(this.name);
//   console.log(this);
  
// }
// details();

// arrow function
// const details2 = () => {
//   let name = "dexter";
//   console.log(this.name);
//   console.log(this);
  
// }
// details2();

// basic syntax of the arrow function
() => {}
const student_info = (student_name) => {
  console.log(`welcome to thapar ${student_name}`);
}
student_info("shubham");

// implicit arrow function -> when return keyword is not used 
// explicitly return -> when return keyword is usedz  
const addNum = (num1,num2) => (num1+num2)
console.log(addNum(1,2) );

// when returning object using arrow function
const greet = () => ({greeting: "good morning"});
console.log(greet());

