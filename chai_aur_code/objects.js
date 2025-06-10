// objects literals

// interview qs - store symbol as a key and log it
const sym = Symbol("key1");
const obj = {
  name: "shubham", //here name which is key is stored as a variable
  batch: "first-year",
  roll_no: 1024030409,
  email: "shubhamrout@thapar.edu",
  // why dot method not preffered?
  "hostel": "m",
  [sym]: "mykey1",
}

// how to access?
console.log(obj.name);//this method is ok , but preffered not to be used
console.log(obj["email"]);//preffered method
// now how to access hostel from object? 
console.log(obj["hostel"]);

console.log(obj[sym]);

// value change
obj.batch = "second_year";
// console.log(obj["batch"]);

// freezing of values -> cant make any changes in the value in the future
// Object.freeze(obj);
obj.batch = "third_year";
console.log("A" , obj);
console.log(obj["batch"]);
console.log("B" , obj);

// using functions on objects
obj.greeting = function(){
  console.log("welcome to thapar");
}
console.log(obj.greeting());
// accessing obj content in function
obj.greeting_two = function(){
  console.log(`welcome to thapar ${this.name}`);
}
console.log(obj.greeting_two());
