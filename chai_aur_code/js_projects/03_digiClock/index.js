const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);
// 1000ms = 1s -> tells function to execute every second