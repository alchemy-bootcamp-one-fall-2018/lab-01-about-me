var guessNumber = document.getElementById('guess-number');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumber.elements;

    var guess = elements.number.value;
    var submit = elements.guess;

    if(guess === 7) {
        guessNumberResponse.textContent = "You got it. You win!";
        submit.disabled = true;
    }
    else {
        
    }



}