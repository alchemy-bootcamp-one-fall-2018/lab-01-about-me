/* exported checkNumberQuiz, resetNumberQuiz */

var numberQuizForm = document.getElementById("number-quiz-form");
var numberQuizResponse = document.getElementById("number-quiz-response");
var numberQuizCounter = document.getElementById("number-quiz-counter");
var numberHint = document.getElementById("number-hint");

var guessCount = 0;

function checkNumberQuiz() {
    var elements = numberQuizForm.elements;
    var guess = elements.number.value;
    var convertedNumber = parseInt(guess, 10);
    var submit = elements.guess;
    var counter = 3 - guessCount;


    if(guess == 41) {
        numberQuizResponse.textContent = 'You win! Yay!';
        submit.disabled = true;
    }
    else {
        guessCount += 1;

        if(guessCount < 4) {
            numberQuizResponse.textContent = 'Keep trying!';
            numberQuizCounter.textContent = 'You have ' + counter + ' guesses left!';
            if(convertedNumber > 41) {
                numberHint.textContent = 'Your number is too high!';
            } else if(convertedNumber < 41) {
                numberHint.textContent = 'Your number is too low!';
            }
        }
        else {
            numberQuizResponse.textContent = 'Sorry, you lose! The correct answer was 41!';
            numberHint.textContent = '';
            numberQuizCounter.textContent = '';
            submit.disabled = true;
        }
    }   
}

function resetNumberQuiz() {
    var elements = numberQuizForm.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    numberQuizResponse.textContent = '';
    numberHint.textContent = '';
    numberQuizCounter.textContent = '';
    
}

