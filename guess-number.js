/* exported checkGuessNumber, resetGuessNumber */
'use strict';

var guessNumber = document.getElementById('guess-number');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumber.elements;
    var guess = elements.number.value;
    var submit = elements.guess;
    //var guessAllowed = 4;
    if(guess === '7') {
        guessNumberResponse.textContent = 'You got it. You win!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;
       // guessesAllowed = guessesAllowed--;
        if(guessCount < 3) {
            guessNumberResponse.textContent = 'Try again!' + guess + ' left';
        }
        else {
            guessNumberResponse.textContent = 'Game Over! Better luck next time!';
            submit.disabled = true;
        }
    }
}

function resetGuessNumber() {
    var elements = guessNumber.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}