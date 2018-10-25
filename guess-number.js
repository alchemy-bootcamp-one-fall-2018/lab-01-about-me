/* exported checkNumber */
/* exported resetNumber */

var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberAnswer = document.getElementById('guess-number-answer');

var guessCount = 0;

function checkNumber() {

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;
// eslint-disable-next-line
    if(guess == 8) {
        guessNumberAnswer.textContent = 'You win!';
        submit.disabled = true;
        // eslint-disable-next-line
        number.classList.add('correct');
        // eslint-disable-next-line
        number.classList.remove('incorrect');
    } else {
        guessCount = guessCount + 1;
        // eslint-disable-next-line
        number.classList.add('incorrect');
        // eslint-disable-next-line
        number.classList.remove('correct');

        if(guess < 8) {
            guessNumberAnswer.textContent = 'Too low!';
        } else {
            guessNumberAnswer.textContent = 'Too high!';
        }

        if(guessCount > 3) {
            guessNumberAnswer.textContent = 'You lose';
            submit.disabled = true;
        }
    }
}

function resetNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberAnswer.textContent = '';
    // eslint-disable-next-line
    number.classList.remove('correct');
    // eslint-disable-next-line
    number.classList.remove('incorrect');
}