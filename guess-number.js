var guessNumForm = document.getElementById('about-me-quiz-2');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if(guess == 9) {
        guessNumResponse.textContent = 'you got it!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 3) {
            guessNumResponse.textContent = 'try again!';
        }
        else {
            guessNumResponse.textContent = 'you lose';
            submit.disabled = true;
        }
    }  
}

function resetGuessNumber() {
    var elements = guessNumForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumResponse.textContent = '';
}