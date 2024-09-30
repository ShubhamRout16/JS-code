// 1.ass9gn the const variable for all the ids from the html file.
const mylabel = document.getElementById("mylabel");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");

//  2. lets define a variable count which we will use further to later use in code.
let count = 0;


decreasebtn.onclick = function() {
    count--;
    document.getElementById("mylabel").textContent = count ;
}

resetbtn.onclick = function() {
    count = 0;
    document.getElementById("mylabel").textContent = count ;
}

increasebtn.onclick = function() {
    count++;
    document.getElementById("mylabel").textContent = count ;
}
