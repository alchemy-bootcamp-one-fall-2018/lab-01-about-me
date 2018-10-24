var numberQuizForm = document.getElementById("number-quiz-form");
var numberQuizResponse = document.getElementById("number-quiz-response");

var guessCount = 0;

function checkNumberQuiz() {
    var elements = numberQuizForm.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if (guess == 41) {
        numberQuizResponse.textContent = 'You win! Yay!';
        submit.disabled = true;
    }
    else {
        guessCount += 1;

        if(guessCount < 4) {
            numberQuizResponse.textContent = 'Keep trying!';
        }
        else {
            numberQuizResponse.textContent = 'Sorry, you lose!';
            submit.disabled = true;
        }
    }
}

function resetGuessNumber() {
    var elements = numberQuizForm.elements;
}


var correctAnswer = "41";