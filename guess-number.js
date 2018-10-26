/* exported checkGuessNumber, resetGuessNumber */
/* eslint no-console: "off" */
var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {
    var elements = guessNumberForm.elements;
    var guess = elements['magic-number'].value;
    var submit = elements.guess;

    // eslint-disable-next-line
    if(guess == 4) {
        guessNumberResponse.textContent = 'Congratulations! You Win!';
        submit.disabled = true;
    } else {
        guessCount += 1;
        if(guessCount < 6) {
            guessNumberResponse.textContent = 'Try Again! You have ' + (5 - guessCount) + ' tries left';
        } else {
            guessNumberResponse.textContent = 'You Lose!';
            submit.disabled = true;
        }
    }
}

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}