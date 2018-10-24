/* exported checkFavoriteNumber, resetFavoriteNumber */

// Good place to "initialize things" - meaning run
// once when the script is loaded
var guessNumberForm = document.getElementById('favorite-number');
var guessNumberResponse = document.getElementById('favorite-number-response');

var startingCount = 0;

function checkFavoriteNumber() {

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    // eslint-disable-next-line eqeqeq
    if(guess == 11) {
        guessNumberResponse.textContent = 'You Are Psychic!';
        submit.disabled = true;
    }
    else {
        startingCount = startingCount + 1;

        if(startingCount < 3) {
            guessNumberResponse.textContent = 'Guess Again!';
        }
        else {
            guessNumberResponse.textContent = 'Game Over!';
            submit.disabled = true;
        }

    }  
}

function resetFavoriteNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.number;
    submit.disabled = false;
    startingCount = 0;
    guessNumberResponse.textContent = '';
}