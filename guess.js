/* exported checkGuessNumber resetGuessNumber */

var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;
    console.log(guess);

// eslint-disable-next-line
    if(guess == 8) {

        guessNumberResponse.textContent = 'Congratulations!  Your guess is correct.  The styles of wheels residing with me are castle, charka, great, super slanty, saxony, production, double table and hatbox.';
        submit.disabled = true;
    }
    else {
        if(guess < 8) {
            guessNumberResponse.textContent = 'Too low!';
        }
        if(guess > 8 && guess < 12) {
            guessNumberResponse.textContent = 'Too high!';
        }
        if(guess > 12) {
            guessNumberResponse.textContent = 'I cannot have more styles of wheels than wheels themselves!';
        }
        if(guessCount === 5) {
            guessNumberResponse.textContent = 'You lose!';
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