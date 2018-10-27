/* exported checkGuessNumber, guessNumResponse, resetGuessNumber */
/* "eslint exported" function does not work on my setup, but I have included it anyway + will get help later */
var guessNumForm = document.getElementById('about-me-quiz-2');
var guessCount = 0;

function checkGuessNumber() {

/* changed scope here as advised for resubmit, added guessCount to if" statement*/
    var elements = guessNumForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if(guess == 9) {
        guessNumResponse.textContent = 'you got it!';
        submit.disabled = true;
        guessCount = 0;
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
// I still can't get line 35 to work, resubmitting for my other changes
function resetGuessNumber() {
    var elements = guessNumForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumResponse.textContent = '';
}