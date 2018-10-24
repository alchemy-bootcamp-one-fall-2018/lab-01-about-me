var guessTravelForm = document.getElementById('guess-travel-form');
var guessTravelResponse = document.getElementById('guess-travel-response');

function checkGuessTravel() {
    var elements = guessTravelForm.elements;
    var travelInput = elements.travel;
    var travelSub = travelInput.value;

    var guessCount = 3;

    if(travelSub == 9){
        travelInput.classList.add('correct');
        travelInput.classList.remove('incorrect');
        guessTravelResponse.textContent = 'Correct!';
    }
    else {
        guess = guessCount - 1;

        if(guess < 4){
            travelInput.classList.add('incorrect');
            travelInput.classList.remove('correct');
            guessTravelResponse.textContent = 'You have ' + guess + ' guesses left!'; 
        }
        else{
            guessTravelResponse.textContent = 'The correct answer was 9.';
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