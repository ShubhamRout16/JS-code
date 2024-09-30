score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

// ! adding auto play feature in this game
let isAutoPlaying = false ;
let intervalId ;

function autoPlay(){
    if(!isAutoPlaying){
      intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
      isAutoPlaying = true ;
    },1000)
    }else{
      clearInterval(intervalId);
      isAutoPlaying = false ;
    }
};

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '' ;

  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Tie'
    }else if(computerMove === 'paper'){
      result = 'You lose'
    }else if(computerMove === 'scissors'){
      result = 'You win'
    }
  }

  if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'You win'
    }else if(computerMove === 'paper'){
      result = 'Tie'
    }else if(computerMove === 'scissors'){
      result = 'You lose'
    }
  }

  if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'You lose'
    }else if(computerMove === 'paper'){
      result = 'You win'
    }else if(computerMove === 'scissors'){
      result = 'Tie'
    }
  }

  if(result === 'You win'){
    score.wins += 1 ;
  }else if(result === 'You lose'){
    score.losses += 1 ;
  }else if(result === 'Tie'){
    score.ties += 1;
  }

  updateScoreElement();

  localStorage.setItem('score', JSON.stringify(score)) ;

  document.querySelector('.js-result').innerHTML = result ;

  document.querySelector('.js-move').innerHTML = `You 
  <img src="/task/images/${playerMove}-emoji.png" class="move-icon">
  <img src="/task/images/${computerMove}-emoji.png" class="move-icon"> Computer` ; 

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}` ;
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `
Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`
}

function pickComputerMove(){
  const randomNumber = Math.random();

  let computerMove = '' ;

  if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock'
  }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'paper'
  }else if(randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors'
  }

  return computerMove;
}