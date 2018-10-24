'use strict';

var numGuess = 2;
var numberFeed = document.getElementById('numberFeed');

// eslint-disable-next-line
function guessNumber() {
    var el = event.target.elements;
    var number = el.number;
    var msg = '';

    // eslint-disable-next-line
    if(number.value == '9') {
        msg = 'Correct!';
        number.classList.add('green');
        number.disabled = true;
        el.guess.disabled = true;
    } else if(numGuess > 0) {
        msg = 'Wrong! ' + numGuess + ' guesses left';
        number.classList.add('red');
    } else {
        msg = 'You lose. It was 9!';
        number.disabled = true;
        el.guess.disabled = true;
    }
    numberFeed.textContent = msg;
    numGuess--;
}

// eslint-disable-next-line
function resetNumGame() {
    var el = event.target.elements;

    numGuess = 2;
    numberFeed.textContent = '';
    el.number.disabled = false;
    el.guess.disabled = false;
    el.number.classList.remove('green');
    el.number.classList.remove('red');
}