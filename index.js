var randomNumberForm = document.getElementById('random-number-form');
var randomNumberResponse = document.getElementById('random-number-response');



var guessCounter = 3;

// Submit button
function checkRandomNumber() {
    var elements = randomNumberForm.elements;
    var randomNumberInput = elements.randomNumberText;
    var numberGuessed = randomNumberInput.value;
    var secretNumber = 7;
    var guessButton = elements.guess;

    if (numberGuessed == secretNumber) {
        randomNumberResponse.textContent = 'You guessed correctly!'
    }
    else {
        if (guessCounter > 0) {
        randomNumberResponse.textContent = 'Incorrect. You have ' + guessCounter + ' guesses left.'
        guessCounter -= 1;
        }
        else {
            randomNumberResponse.textContent = 'Game over!'
            guessButton.disabled = true;
        }
    }

}

// Reset button
function resetRandomNumber() {
    var elements = randomNumberForm.elements;

}







