// HERE WE WILL LEARN HOW TO TAKE INPUT FROM USER
// 1. EASY WAY - USING WINDOW PROMPT
// 2. PROFFESIONAL WAY - USING HTML

//  EASY WAY !

// let username ;

// username = window.prompt("what is your username?");

// console.log(username);


// HARD  WAY !

let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `hello my name is ${username}`;
}