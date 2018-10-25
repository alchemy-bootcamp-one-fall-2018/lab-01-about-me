/* exported checkGuessingGame, resetGuessingGame */

var guessingGameForm = document.getElementById('guessingGame');
var guessingGameOutput = document.getElementById('guessingGameOutput');
var guessingGameCounter = 5;

function checkGuessingGame() {
    
    var elements = guessingGameForm.elements;
    var userGuess = elements.guessNumber.value;
// eslint-disable-next-line eqeqeq
    if(userGuess == 3){
        guessingGameOutput.textContent = 'Correct!';
    
    }
    else {
        guessingGameCounter = guessingGameCounter - 1;
        if(guessingGameCounter < 5){
            guessingGameOutput.textContent = 'Wrong, you have ' + guessingGameCounter + ' guesses left';
        }
            
    }
        
}

function resetGuessingGame() {
    guessingGameOutput.textContent = '';
    guessingGameCounter = 5;
}
