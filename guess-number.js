/*export guess-number-form guess-number-response checkGuessNumber*/

var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumberForm.element;
    var guess = elements.number.value;
    var submit = elements.guess.value;

    

    if(guessCount == 4) {
        guessNumberResponse.textContext = 'You Win!';
        submit.disabled = true;
    
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4) {
            guessNumberResponse.textContent = 'You lose';
            submit.disabled = true;

            function resetGuessNumber() {
                var elements = guessNumberForm.elements;
                var submit = elements.guess;
                guessCount = 0;
                guessNumberResponse.textContent = '';
            }
        }
    }

}

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}