// how setTimeout event works under the hood()
console.log('start');

setTimeout(function cb(){
  console.log("setTimeout works");
  
},5000)

console.log("end");

// how does event listeners work under the hood ?
console.log("start");

document.getElementById('btn')
.addEventListener('click', function(){
  console.log("event clicked");
  
})

console.log("end");

// HOW DOES FETCH OCCURS
console.log("start");

setTimeout(function cbT(){
  console.log('setTimeout occurs');
},5000)

fetch('https://api.netflix.com')
.then(function cbF(){
  console.log("cb netflix");
})

console.log("end");

