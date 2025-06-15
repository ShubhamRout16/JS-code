// creation of promise
const promiseOne = new Promise(function(resolve,reject){
  // Do an async task
  // like DB calls,cryptography , network calls
  setTimeout(function(){
    // console.log("Async task is complete");
    resolve(); //connecting resolve with .then
  },1000)
});

// consumption of promise
promiseOne.then(function(){
  // .then function has direct connection with resolve
  // console.log("promise is consumed");
})

// we can create and consume promise together
new Promise(function(resolve,reject){
  setTimeout(function(){
    // console.log("Async 2 is completed");
    resolve();
  },1000)
}).then(function(){
  // console.log("Async 2 consumed");
})

// sending parameter in resolve
const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username: "shubham", email: "shubhamrout90@gmail.com"}) // generally object is passed in the parameter
  },1000)
})

promiseThree.then(function(user){
  // console.log(user);
})

// .then chaining
const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let Error = false;
    if(!Error){
      // resolve({username: "shubham",email: "shubhamrout90@gmail.com"})
    }else{
      // reject('Error: something went wrong')
    }
  },1000)
})

promiseFour.then(function(user){
  console.log(user);
  return user.username
}).then(function(username){
  console.log(username);
}).catch(function(Error){
  console.log(Error);
}).finally(() => console.log("promise has been either resolved or rejected"))

// handling error through async await
const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let Error = true;
    if(!Error){
      // resolve({username: "javascript",email: "shubhamrout90@gmail.com"})
    }else{
      // reject('Error: JS went wrong')
    }
  },1000);
})

async function consumePromiseFive(){
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (Error) {
    console.log(Error);
  }
}

consumePromiseFive();


// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (Error) {
//     console.log(Error);
//   }
// }
// getAllUsers();

// fetch returns a promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})