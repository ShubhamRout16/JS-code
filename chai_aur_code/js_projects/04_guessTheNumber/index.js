// random value generate krwa leta ha guessess ke liye
let randomVal = parseInt((Math.random() * 100) + 1); // value kabhi kbar point me v hoti h isliye

// saare necessary elements ko select krlo
const submit = document.querySelector('#subt'); //events ko manipulate krne ke liye
const userInput = document.querySelector('#guessField'); // recording user ka input
const puranaGuess = document.querySelector('.guesses');
const bachaGuess = document.querySelector('.lastResult');
const paraControl = document.querySelector('.resultParas'); // agar user ke sare chances khtm hojaye toh purana guess and bacha hua guess ke para ko hide krde
const lowOrHi = document.querySelector('.lowOrHi');

let guessArr = []; //user ke sare guess kiye huye values ko show kredenge array me
let attempts = 1; //kitne attempt hogaye wo dikhane ke liye

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }else if(guess < 1){
    alert('Please enter a number greater than 1');
  }else if (guess > 100){
    alert('Please enter a number greater than 100');
  }else{
    guessArr.push(guess);
    if(attempts === 11){
      displayGuess(guess);
      displayMessage(`Game over. random value is ${randomVal}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomVal){
    displayMessage(`you guessed it right`);
    endGame();
  }else if(guess < randomVal){
    displayMessage(`you number is low`);
  }else if(guess > randomVal){
    displayMessage(`your number is high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  puranaGuess.innerHTML += `${guess}, `;
  attempts++;
  bachaGuess.innerHTML = `${11 - attempts}`
}

function displayMessage(message){
  lowOrHi.innerHTML =  `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  const p = document.createElement('p');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  paraControl.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
  randomVal = parseInt(Math.random() * 100 + 1);
  guessArr = [];
  attempts = 1;
  puranaGuess.innerHTML = '';
  bachaGuess.innerHTML = `${11 - attempts} `;
  userInput.removeAttribute('disabled');
  paraControl.removeChild(document.querySelector('.button'));

  playGame = true;
});
};