/*exported checkGuessNumber resetGuessNumber */
var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    // eslint-disable-next-line
    if(guess == 4) {
        guessNumberResponse.textContext = 'You Win!';
        submit.disabled = true;
    
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4) {
            guessNumberResponse.textContent = 'You lose';
            submit.disabled = true;
        }
    }

}

function resetGuessNumber() {

    guessCount = 3;
    document.getElementById('guess-btn').disabled = false;
    guessNumberResponse.textContent = '';
}