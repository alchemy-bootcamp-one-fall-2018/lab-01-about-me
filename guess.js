var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var element = guessNumberForm.elements;
    var guess = guessNumberForm.element;
    var submit = document.getElementById('submit');

    if(guess === 8) {
        guessNumberResponse.textContent = 'Congratulations!  Your guess is correct.  The styles of wheels residing with me are castle, charka, great, super slanty, saxony, production, double table and hatbox.';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessNumberResponse < 8) {
            guessNumberResponse.textContent = 'Too low!';
        }
        if(guessNumberResponse > 8 && guessNumberResponse < 12) {
            guessNumberResponse.textContent = 'Too high!';
        }
        if(guessNumberResponse > 12) {
            guessNumberResponse.textContent = 'Just how many wheels do you think I have?!';
        }
    }

}

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}