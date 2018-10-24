var guessTravelForm = document.getElementById('guess-travel-form');
var guessTravelResponse = document.getElementById('guess-travel-response');

var guessCount = 0;

function checkGuessTravel() {
    var elements = guessTravelForm.elements;
    var travelInput = elements.travel;
    var travelSub = travelInput.value;

    if(travelSub == 9){
        guessTravelResponse.textContent = 'Correct!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 4){
            guessTravelResponse.textContent = 'Try again!'; 
        }
        else{
            guessTravelResponse.textContent = 'You lose. The correct answer was 9.';
            submit.disabled = true;
        }
    }

}

function resetGuessTravel() {
    var elements = guessTravelForm.elements;
    var travelInput = elements.travel;
    
    travelInput.classList.remove('incorrect');
    travelInput.classList.remove('correct');

}