/* exported checkGuessGame, resetGuessGame */
var guessTimeForm = document.getElementById('guess-game-form');
var guessTimeResponse = document.getElementById('guess-game-response');

var guessOneCount = 0;

function checkGuessGame() {

    var elements = guessTimeForm.elements;
    var guessOne = elements.plant.value;
    var submit = elements.guessOne;

    if(guessOne === 'Elm') {
        guessTimeResponse.textContent = 'You got it! Try the next question.';
        submit.disabled = true;
    }
    else {
        guessOneCount = guessOneCount + 1;
    }
}

function resetGuessGame() {
    var elements = guessTimeForm.elements;
    var submit = elements.guessOne;
    submit.disabled = false;
    guessOneCount = 0;
    guessTimeResponse.textContent = '';
}