// how to declare objects with constructors
// objects singleton

const myUser = new Object(); // creates a singleton object
// console.log(myUser);

const myUser2 = {} //doesnt creates a singleton object
myUser2.id = "shubhamrout@thapar.edu";
// console.log(myUser2);

// merging two or more objects
const obj1 = {name: "shubham",
  batch: 2028,
}

const obj2 = {
  name: "rout",
  batch: 2024,
}

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

// breaking objects

const obj4 = {...obj1,...obj2};
console.log(obj4);

// usually all the data will come in the form of the array
const dataRecieved = [
  {
    name: "shubham rout",
    email: "shubhamrout@thapar.edu"
  },
  {
    name: "shubham rout 2",
    email: "shubhamrout2@thapar.edu"
  },
  {},
  {},
]
// how to access these data?
console.log(dataRecieved[1].email);

console.log(obj1);
// very frequently used later
console.log(Object.keys(obj1)); // will return output in the form of array
console.log(Object.values(obj1)); // output datatype is array
console.log(Object.entries(obj1));// array inside of array


// to check if the key is present or not -> returned datatype will be boolean
console.log(obj1.hasOwnProperty('name'));


// De structuring objects
const studentId = {
  name: "shubham rout",
  class: 2028,
  roll_no: 1024030409,
  branch: "COE"
}

// why destrucutring -> to access the object but not the traditional way
const {roll_no : roll} = studentId
// console.log(roll_no);
// assign alias to key
console.log(roll); // does the same thing


