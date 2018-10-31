/* exported checkGuessNumber, resetGuessNumber, guessNumberResponse*/
/* use strict */
var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {
    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;
    
    if(guess === '5') {
        guessNumberResponse.textContent = 'You are Correct!!!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;
        if(guessCount < 3) {
            guessNumberResponse.textContent = 'Try again!';
        }        
        else {
            guessNumberResponse.textContent = 'You lose!';
            submit.disabled = true;
        }
    } 
    guessNumberResponse.textContent = 'You have ' + guessCount + ' left';
}        

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}