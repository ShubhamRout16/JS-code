// higher order array loops

const arr = [1,2,3,4,5];

// forof loop
// for (const element of object) { // here object doesnt means js object it can be anything array string variable
  
// }
for (const val of arr) {
  // console.log(val);
}

const name = "shubham rout"
for (const nam of name) {
  // console.log(`welcome to thapar ${nam}`);
}

// maps -> follows the order in which the data is stored and doesnt stores duplicate data
const map = new Map();
map.set("Demon slayer", "Tanjiro")
map.set("one piece", "luffy")
map.set("jjk","gojo")

// console.log(map);

// how to iterate through map using forof loop
for (const [key,value] of map) { //important to remember the syntax
  // console.log(key , "=>" , value);
}

// can we iterate through object using forof loop
// we will find error while iterating through the object
// so objects are not iterable using forof loop but maps are
// const myobj = {
//   name: "shubham rout",
//   batch: 2028
// }

// for (const [key,value] of myobj) {
//   console.log(key,"=>",value);
// }


// for in loop => can iterate through object
const myobj = {
  name: "shubham rout",
  batch: 2028
}

for (const key in myobj) {
  // console.log(key); //prints keys only
  // console.log(myobj[key]); //prints value only
  // console.log(`${key} => ${myobj[key]}`);
  
}

// can for in loop used on array => recommended not to use because returns the key values of the array   
// const main_c = ["luffy","spiderman","gojo"];

// for (const key in main_c) {
//   console.log(key);
  
// }


// foreach loop
const language = ["js" , "cpp" , "php" ,"ruby"]

language.forEach(function (val) {
  // console.log(val);
})

// as arrow function
language.forEach((item) => {
  // console.log(item);
  
})

// can we pass another function in foreach loop
// function printMe(){
//   console.log("shubham rout");
// }

// language.forEach(printMe)


language.forEach((item , index , language) => {
  console.log(item , index , language);
})

const sups = [
  {
    name: "brandon",
    universe: "mcu"
  },
  {
    name: "shubham",
    universe: "omniverse"
  },
  {
    name: "shubh_future",
    universe: "godverse"
  },
  {

  }
]

sups.forEach((item) => {
  console.log(item.universe);
})