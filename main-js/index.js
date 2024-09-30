const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
// const rp=document.getElementById("result")
const output = document.getElementById("result");

rockBtn.onclick = function () {
  let randomNumber = Math.random();

  let computerMove = ""; 

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  let result = "";

  if (computerMove == "rock") {
    result = "tie";
  } else if (computerMove == "paper") {
    result = "You lose";
  } else if (computerMove == "Scissors") {
    result = "You win";
  }

  document.getElementById("result").textContent = `you picked Rock. Computer picked ${computerMove}. ${result}`;
  document.getElementById("result").textContent = `you picked Rock. Computer picked ${computerMove}. ${result}`;
//   `you picked Rock. Computer picked ${computerMove}. ${result}`;
//   rp.innerHtml=`you picked Paper. Computer picked ${computerMove2}. ${result2}`
};
