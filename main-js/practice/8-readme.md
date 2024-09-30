<!-- ! what is the function updateScoreElement() called in line 39 and 94? -->
-> The updateScoreElement function is called on lines 39 and 94 for the following reasons:

Line 39: The updateScoreElement function is called immediately after the score object is initialized or retrieved from local storage. This is to display the initial score, which is either the default score (0 wins, 0 losses, 0 ties) or the previously stored score. By calling updateScoreElement here, the score display element is updated with the initial score, so the user can see the current score before playing the game.

Line 94: The updateScoreElement function is called again after the score is updated inside the playGame function. This is to update the score display element with the new score after each game. When the user makes a move and the game is played, the score is updated accordingly, and updateScoreElement is called to reflect the new score in the score display element.

In both cases, the updateScoreElement function is called to ensure that the score display element is always up-to-date and reflects the current score.

<!-- ! Why is updateScoreElement() called before pickComputerMove() function? -->
-> The updateScoreElement function is defined before the pickComputerMove function because of the way the code is structured and the order of execution.

In JavaScript, functions can be called before they are defined, as long as they are defined somewhere in the script. This is because JavaScript has a mechanism called "hoisting", which moves function declarations to the top of their scope.

In this code, the updateScoreElement function is called on line 39, which is before its definition on line 83. This is okay because the function is defined later in the script, and JavaScript's hoisting mechanism takes care of making the function available when it's called.

The reason updateScoreElement is defined before pickComputerMove is likely because the author of the code wanted to group related functions together. The updateScoreElement function is closely related to the score and the game state, so it's defined near the top of the script, along with the playGame function, which also deals with the game state.

The pickComputerMove function, on the other hand, is a utility function that generates a random move for the computer. It's not directly related to the game state or the score, so it's defined later in the script, after the more game-state-related functions.

Overall, the order of function definitions in this code is a matter of organization and readability, rather than a technical requirement.