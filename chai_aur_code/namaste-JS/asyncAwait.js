/*
-> what is async ?
-> what is await ?
-> how async await works behind the scene ?
-> examples of using async await
-> interviews
-> async await vs promise .then/.catch
*/

// lets create a promise
const p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('promise resolved value')
  },10000)
})
const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('promise resolved value')
  },20000)
})
// what is an async function ?
// async is a keyword which is used to create async functions
// async function looks like this and it will always return a promise
// if we dont return a promise , if we return a a string , boolean , number anything
// then it will wrap it in form of promise and return it
async function getData(){
  // return "shubham rout" // since we are returning a string async function will wrap it in promise
  // return p 
}
const dataPromise = getData() //this is promise now we have to consume it
// consuming a promise
dataPromise.then((response) => {
  // console.log(response)
})
// aysnc and await combo is used to handle promises
// how to resolve promises without using async await
// function dataGet(){
//   // js engine will not wait for promise to be resolved
//   p.then((response) => console.log(response))
//   console.log("namaste javascript")
// }
// dataGet()
// how to resolve promises using async await
// await can be only used inside of async functions 
async function handlePromise(){
  console.log("hello world")
  // js engine was waiting for promise to resolved 
  const value1 = await p1 ; // await is used only in front of a promise and value contains the resolved value of the promise p
  console.log("namaste javascript")
  console.log(value1)

  const value2 = await p2 ; // await is used only in front of a promise and value contains the resolved value of the promise p
  console.log("namaste javascript")
  console.log(value2)
}
handlePromise();
// difference between  handling the promise using async await and the normal way

const p3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("learning javascript")
  },5000)
})
const p4 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("learning javascript 2")
  },10000)
})
async function handlingPromise(){
  console.log("hello world")

  const val1 = await p3
  console.log("namaste javascript 1")
  console.log(val1)

  const val2 = await p4
  console.log("namaste javascript 2")
  console.log(val2)
}
handlingPromise()

const api_url = "https://api.github.com/users/ShubhamRout16"
async function promiseHandling(){
  try {
    const data = await fetch(api_url)
    const jsonValue = await data.json()
    console.log(jsonValue)
  }
  catch (err){
    console.log(err)
  }
}
promiseHandling();