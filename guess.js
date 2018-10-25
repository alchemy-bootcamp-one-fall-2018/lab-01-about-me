var guessTravelForm = document.getElementById('guess-travel-form');
var guessTravelResponse = document.getElementById('guess-travel-response');

var guessCount = 0;

// eslint-disable-next-line 
function checkGuessTravel() {
    var elements = guessTravelForm.elements;
    var travelInput = elements.travel;
    var travelSub = travelInput.value;

    // eslint-disable-next-line eqeqeq
    if(travelSub == 9){
        guessTravelResponse.textContent = 'Correct!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4){
            guessTravelResponse.textContent = 'Try again!'; 
        }
        else {
            guessTravelResponse.textContent = 'You lose. The correct answer was 9.';
            submit.disabled = true;
        }
    }

}

// eslint-disable-next-line
function resetGuessTravel() {
    var elements = guessTravelForm.elements;
    var travelInput = elements.travel;
    
    travelInput.classList.remove('incorrect');
    travelInput.classList.remove('correct');

}