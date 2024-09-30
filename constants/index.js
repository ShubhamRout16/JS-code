// constants - are the variables whose value cant be changed
// in this we will find the circumference of the circle and learn constants

const PI = 3.14 //value here is number thats why we have used the name of variable to be capitalize, if it was string then we wont have put it capitalize.
// let radius;
// let circumference;

// radius = window.prompt("enter the radius of the circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(circumference);

// here we have learnt to use it using windows prompt 
// Now we will learn using taking input from the user :

document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm"
}

