// task 1
const names = ["shubham", "prabh", "rudraksh", "aviral"];

function logNames(names, callback) {
  for (let i = 0; i < names.length; i++) {
    callback(names[i]);
  }
}

logNames(names, function(name) {
  console.log(`Hello, ${name}!`);
});