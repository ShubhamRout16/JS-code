// PROMISE.ALL() -> SUCCESS CASE
// in this case all the promises are resolved 
// and promise.all will return a array of resolved response from the promises
// promise.all will return after all the promises are resolved
// it means if the longest promise takes 3 second to resolve then
// promise.all will return after 3 seconds
// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p1 is successfull')
//   },3000)
// })

// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p2 is successfull')
//   },2000)
// })

// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p3 is successfull')
//   },1000)
// })

// Promise.all([p1,p2,p3])
// .then(function(response){
//   console.log(response)
// })
// .catch(function(error){
//   console.error(error)
// })

// PROMISE.ALL() -> FAILURE CASE
// in the case of promise.all even if one of the promises fail 
// promise.all will return the output of first failed promise and wont wait for all the remaining promises to resolve
// due to which it is also called as 'fail fast'
// const p4 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p4 is successfull')
//   },3000)
// })

// const p5 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject('p5 is unsuccessfull')
//   },2000)
// })

// const p6 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p6 is successfull')
//   },1000)
// })

// Promise.all([p4,p5,p6])
// .then(function(response){
//   console.log(response)
// })
// .catch(function(error){
//   console.error(error)
// })

// PROMISE.ALLSETTLED()
// in the case of the promise.allSettled
// it will wait for all the promises to settle either they reject or resolve
// it will wait for them to be settled and return and array of objects 
// const p7 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p4 is successfull')
//   },1000)
// })

// const p8 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p5 is successfull')
//   },3000)
// })

// const p9 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject('p6 is unsuccessfull')
//   },2000)
// })

// Promise.allSettled([p7,p8,p9])
// .then(function(response){
//   console.log(response)
// })
// .catch(function(error){
//   console.error(error)
// })

// PROMISE.RACE()
// in the case of race it will wait for the fastest promise to settle
// and return either a resolved promises or rejected promise
// const p10 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p10 is successfull')
//   },3000)
// })

// const p11 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('P11 is successfull')
//   },2000)
// })

// const p12 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('p12 is successfull')
//   },1000)
// })

// Promise.race([p10,p11,p12])
// .then(function(response){
//   console.log(response)
// })
// .catch(function(error){
//   console.error(error)
// })

// promise.any api will wait for any of the promises to resolved settled promise to return
// even if there is any promise will is being rejected the fastest it will wait for the
// resolved successfull promise and return it
// in the case if all the promises get rejected then it will return an AggregateError
// to get an AggregrateError in [err13 , err14 , err15]
const p13 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject('p13 is unsuccessfull')
  },3000)
})

const p14 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject('p14 is unsuccessfull')
  },2000)
})

const p15 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject('p15 is unsuccessfull')
  },1000)
})

Promise.any([p13,p14,p15])
.then(function(response){
  console.log(response)
})
.catch(function(error){
  console.error(error)
  // to get aggregrate error in array format
  console.log(error.errors)
})