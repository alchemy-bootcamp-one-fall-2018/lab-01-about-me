/* exported checkRandomNumber, resetRandomNumber */

var randomNumberForm = document.getElementById('random-number-form');
var randomNumberResponse = document.getElementById('random-number-response');



var guessCounter = 3;

function checkRandomNumber() {
    var elements = randomNumberForm.elements;
    var randomNumberInput = elements.randomNumberText;
    var numberGuessed = randomNumberInput.value;
    var secretNumber = 7;
    var guessButton = elements.guess;

    // eslint-disable-next-line eqeqeq
    if(numberGuessed == secretNumber) {
        randomNumberResponse.classList.add('correct');
        randomNumberResponse.textContent = 'You guessed correctly!';
    }
    else {
        if(guessCounter > 0) {
            randomNumberResponse.textContent = 'Incorrect. You have ' + guessCounter + ' guesses left.';
            guessCounter -= 1;
            randomNumberResponse.classList.add('incorrect');
        }
        else {
            randomNumberResponse.classList.add('gameOver');
            randomNumberResponse.textContent = 'Game over!';
            guessButton.disabled = true;

        }
    }

}

// Reset button
function resetRandomNumber() {
    var elements = randomNumberForm.elements;
    var guessButton = elements.guess;
    randomNumberResponse.textContent = '';
    guessCounter = 3;
    guessButton.disabled = false;
    randomNumberResponse.classList.remove('correct');
    randomNumberResponse.classList.remove('incorrect');
    randomNumberResponse.classList.remove('gameOver');
}







