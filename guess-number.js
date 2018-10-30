/*exported checkGuessNumber resetGuessNumber */
'use strict';
var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');
var guessCount = 3;

function checkGuessNumber() {

    var elements = guessNumberForm.elements;
    var userGuess = elements.guess.value;

    // eslint-disable-next-line
    if(userGuess == '27') {
        guessNumberResponse.textContent = 'You Win!';
        document.getElementById('guess-btn').disabled = true;
    } else {
        guessCount = guessCount - 1;
        guessNumberResponse.textContent = 'Try again! You have ' + guessCount + ' guesses left';

        if(guessCount === 0) {
            guessNumberResponse.textContent = 'No more tries';
            document.getElementById('guess-btn').disabled = true;
        }
    }
}

function resetGuessNumber() {

    guessCount = 3;
    document.getElementById('guess-btn').disabled = false;
    guessNumberResponse.textContent = '';
}