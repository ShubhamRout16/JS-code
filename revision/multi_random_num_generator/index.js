// 1. asssign a const variable for both all ids

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const mybutton = document.getElementById("mybutton");

//2. assign a variable randomNum  for three different labels in which we will later store the value of the random number generated , and assign the max and min value for which the numbers can be generated.

let randomNum1;
let randomNum2;
let randomNum3;
const min = 1;
const max = 6;

// 3. now on clicking on the button on the webpage the js will link it to index.js file since it is not a html element we will connect is using the mybutton variable.
// 4. now we will use a random method of js to get random value generated and set it to 1 to 6.
// 5. now we will change the content of label html element by using js element object that is document.getElementById wali chiz.
// 6. and assign the value to the randomNum which we created earlier.

mybutton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min ;
    randomNum2 = Math.floor(Math.random() * max) + min ;
    randomNum3 = Math.floor(Math.random() * max) + min ;
    document.getElementById("label1").textContent = randomNum1 ;
    document.getElementById("label2").textContent = randomNum2 ;
    document.getElementById("label3").textContent = randomNum3 ;
}
