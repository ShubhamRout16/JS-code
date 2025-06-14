let currentStatus = false;// color not changed
const body = document.querySelector('body');
let intervalChanges;

const rapidColor = function(){
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// start button krne pe kya hoga
document.querySelector('#start').addEventListener('click',function(){
  if(currentStatus ==  false){
    intervalChanges = setInterval(rapidColor,1000); // interval store krliya
    currentStatus = true; //started color changing
    console.log("started");
  }
})

// stop button
document.querySelector('#stop').addEventListener('click',function(){
  if(currentStatus == true){
    clearInterval(intervalChanges); // interval ka reference
    currentStatus = false; // reset / stopped color changing
    console.log("stopped");
  }
})