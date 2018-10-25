/* exported checkGuessNumber, resetGuessNumber */
var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if(guess === 13) {
        guessNumberResponse.textContent = 'you won :O';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 5) {
            guessNumberResponse.textContent = 'Wrong answer... you have used ' + guessCount + ' out of 5 guesses. HINT: he is pretty old.';
        }
        else {
            guessNumberResponse.textContent = 'you lost :<';
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