var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {
    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if (guess == 4) {
        guessNumberResponse.textContent = 'Congratulations! You Win!';
        submit.disabled = true;
    } else {
        guessCount += 1;
        if (guessCount < 4) {
            guessNumberResponse.textContent = 'Try Again!';
        }
        else {
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