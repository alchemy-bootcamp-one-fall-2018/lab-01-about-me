/* exported checkGuessGame, resetGuessGame */
var guessGameForm = document.getElementById('guess-game-form');
var guessGameResponse = document.getElementById('guess-game-response');

var guessCount = 0;

var correct = 0;
var incorrect = 0;

function checkGuessGame() {
    var elements = guessGameForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    

// we mean to use == here because inputs return text (strings)
// eslint-disable-next-line eqeqeq
    if(guess == 16) {
        guessGameResponse.textContent = 'You got it!';
        submit.disabled = true;
    }
    else {
        guessCount += 1;
        incorrect += 1;

        if(guessCount < 5) {
            guessGameResponse.textContent = 'Nope, try again! You got ' + correct + ' out of ' + incorrect + ' chances.';
        }
        else {
            guessGameResponse.textContent = 'Bummer, you lose. You got ' + incorrect + ' chances.';
            submit.disabled = true;
        }
    }
}

function resetGuessGame() {
    var elements = guessGameForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessGameResponse.textContent = '';
}