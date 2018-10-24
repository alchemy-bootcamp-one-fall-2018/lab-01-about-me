/* exported checkGuessState, resetGuessState */

var guessStateForm = document.getElementById('guess-state-form');
var guessStateResponse = document.getElementById('guess-state-response');

var guessCount = 0;

function checkGuessState() {
    var elements = guessStateForm.elements;
    var guess = elements.state.value;
    var submit = elements.guess;

    if(guess.toLowerCare() === 'alaska') {
        guessStateResponse.textContent = 'Correct!!!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4) {
            guessStateResponse.textContent = 'Try again!';
        }
        else {
            guessStateResponse.textContent = 'You lose';
            submit.disabled = true;
        }
    }
}