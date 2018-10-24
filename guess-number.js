var guessNumberForm = document.getElementById('guess-number-form');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {
    // this code is specific to when checkAnswers is called

    var elements = guessNumberForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    // we mean to use == here because inputs return text (strings)
    // eslint-disable-next-line eqeqeq
    if(guess == 7) {
        guessNumberResponse.textContent = 'Congratulations! You got it right!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4) {
            guessNumberResponse.textContent = 'Keep trying!';
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
    guessNumberResponse.textContent = '';
}