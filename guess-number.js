/* exported checkGuessNumber, resetGuessNumber */

var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;
var guessRemaining = 3;

function checkGuessNumber() {
    // Code is specific to when checkAnswers is called

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    // Use == here because inputs return text (strings)
    // eslint-disable-next-line eqeqeq
    if(guess == 7) {
        guessNumberResponse.textContent = 'Congratulations! You got it right!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 3) {
            guessRemaining = guessRemaining - 1;
            guessNumberResponse.textContent = 'Keep trying! You have ' + guessRemaining + ' guesses left';

        }
        else {
            guessNumberResponse.textContent = 'Sorry! You exceeded the maximum guess limit!';
            submit.disabled = true;
        }

    }  
}

function resetGuessNumber() {
    var elements = guessNumberForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessRemaining = 3;
    guessNumberResponse.textContent = '';
}