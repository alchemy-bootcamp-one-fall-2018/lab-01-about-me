var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberAnswer = document.getElementById('guess-number-answer');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if(guess == 4) {
        guessNumberAnswer.textContent = 'you win!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4) {
            guessNumberAnswer.textContent = 'try again!';
        }
        else {
            guessNumberAnswer.textContent = 'you lose';
            submit.disabled = true;
        }

    }  
}

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberAnswer.textContent = '';
}