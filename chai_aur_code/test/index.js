// Generate random number between 1 and 100
let randomVal = parseInt((Math.random() * 100) + 1);

// Select DOM elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesDisplay = document.querySelector('#guesses');
const attemptsLeft = document.querySelector('#attemptsLeft');
const feedbackMessage = document.querySelector('#lowOrHi');
const resetBtn = document.querySelector('#resetGame');
const gameOverModal = document.querySelector('#gameOverModal');
const modalTitle = document.querySelector('#modalTitle');
const modalMessage = document.querySelector('#modalMessage');
const finalAttempts = document.querySelector('#finalAttempts');
const correctNumber = document.querySelector('#correctNumber');
const playAgainBtn = document.querySelector('#playAgain');
const closeModalBtn = document.querySelector('#closeModal');
const attemptsCircle = document.querySelector('.attempts-circle');
const messageContainer = document.querySelector('.message-container');

// Game state
let guessArr = [];
let attempts = 1;
let playGame = true;
const maxAttempts = 10;

// Initialize game
updateAttemptsDisplay();
updateFeedbackMessage("Make your first guess!", "");

// Event listeners
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        }
    });
}

resetBtn.addEventListener('click', newGame);
playAgainBtn.addEventListener('click', function() {
    hideModal();
    newGame();
});
closeModalBtn.addEventListener('click', hideModal);

// Close modal when clicking outside
gameOverModal.addEventListener('click', function(e) {
    if (e.target === gameOverModal) {
        hideModal();
    }
});

function validateGuess(guess) {
    if (!playGame) return;

    // Clear previous animations
    userInput.classList.remove('shake');
    attemptsCircle.classList.remove('pulse');

    if (isNaN(guess)) {
        showError('Please enter a valid number!');
        return;
    }
    
    if (guess < 1) {
        showError('Please enter a number greater than 0!');
        return;
    }
    
    if (guess > 100) {
        showError('Please enter a number less than 101!');
        return;
    }

    // Valid guess
    guessArr.push(guess);
    
    if (attempts === maxAttempts) {
        displayGuess(guess);
        updateFeedbackMessage(`Game Over! The number was ${randomVal}`, "error");
        endGame(false);
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomVal) {
        updateFeedbackMessage(`🎉 Congratulations! You guessed it right!`, "success");
        attemptsCircle.classList.add('success');
        endGame(true);
    } else if (guess < randomVal) {
        updateFeedbackMessage(`📈 Too low! Try a higher number.`, "warning");
        addPulseAnimation();
    } else if (guess > randomVal) {
        updateFeedbackMessage(`📉 Too high! Try a lower number.`, "warning");
        addPulseAnimation();
    }
}

function displayGuess(guess) {
    userInput.value = '';
    
    // Update guesses display
    if (guessArr.length === 1) {
        guessesDisplay.innerHTML = guess;
    } else {
        guessesDisplay.innerHTML += `, ${guess}`;
    }
    
    attempts++;
    updateAttemptsDisplay();
}

function updateAttemptsDisplay() {
    const remaining = maxAttempts - attempts + 1;
    attemptsLeft.textContent = remaining;
    
    // Update circle color based on remaining attempts
    attemptsCircle.classList.remove('success', 'warning', 'danger');
    
    if (remaining <= 2) {
        attemptsCircle.classList.add('danger');
    } else if (remaining <= 4) {
        attemptsCircle.classList.add('warning');
    }
}

function updateFeedbackMessage(message, type) {
    feedbackMessage.textContent = message;
    messageContainer.className = 'message-container';
    
    if (type) {
        messageContainer.classList.add(type);
    }
}

function showError(message) {
    updateFeedbackMessage(message, "error");
    userInput.classList.add('shake');
    
    // Remove shake animation after it completes
    setTimeout(() => {
        userInput.classList.remove('shake');
    }, 500);
}

function addPulseAnimation() {
    attemptsCircle.classList.add('pulse');
    setTimeout(() => {
        attemptsCircle.classList.remove('pulse');
    }, 600);
}

function endGame(won) {
    userInput.setAttribute('disabled', '');
    submit.disabled = true;
    playGame = false;
    
    // Show modal after a short delay
    setTimeout(() => {
        showGameOverModal(won);
    }, 1000);
}

function showGameOverModal(won) {
    if (won) {
        modalTitle.textContent = '🎉 Congratulations!';
        modalMessage.textContent = 'You guessed the number!';
    } else {
        modalTitle.textContent = '😔 Game Over!';
        modalMessage.textContent = 'Better luck next time!';
    }
    
    finalAttempts.textContent = attempts - 1;
    correctNumber.textContent = randomVal;
    
    gameOverModal.classList.add('active');
}

function hideModal() {
    gameOverModal.classList.remove('active');
}

function newGame() {
    randomVal = parseInt(Math.random() * 100 + 1);
    guessArr = [];
    attempts = 1;
    playGame = true;
    
    // Reset UI
    guessesDisplay.innerHTML = 'None yet';
    userInput.removeAttribute('disabled');
    submit.disabled = false;
    userInput.value = '';
    
    // Reset attempts display
    updateAttemptsDisplay();
    attemptsCircle.classList.remove('success', 'warning', 'danger');
    
    // Reset feedback
    updateFeedbackMessage("Make your first guess!", "");
    
    // Focus input
    userInput.focus();
}

// Focus input on page load
window.addEventListener('load', () => {
    userInput.focus();
});