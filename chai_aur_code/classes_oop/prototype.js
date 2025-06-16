// GOAL
// const myName = "shubham   "

// console.log(myName.trueLength);

// hame kuch aesa krna ha ki jisse jo v string lu uski automatically true length pata chl jaye

let myHeroes = ["wanda","captain_america"]

let heroPower = {
  wanda: "chaos magic",
  captain_america: "super soldier",

  getWandaPower: function(){
    console.log(`her superpower is ${this.wanda}`);
  }
}


// adding a property to object to see whether this property gets added to array, function or string whic are the prototypoe of object

Object.prototype.shubham = function(){
  console.log(`shubham is present in all objects`);
}

// heroPower.shubham();
// myHeroes.shubham();


// inheritance -> prototypal inheritance 
const user = {
  name: "shubham",
  email: "shubham@google.com"
}

const Teacher = {
  makeVideo: true
}

const teachingSupport = {
  isAvailable: false
}

const TAsupport = {
  makeAssignment:  'JS Assignment',
  fullTime: true,
  _proto_: teachingSupport
}

Teacher._proto_ =user

// modern syntax
Object.setPrototypeOf(teachingSupport,Teacher);

let username = "shubham    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
}

username.trueLength();
"hello ".trueLength();