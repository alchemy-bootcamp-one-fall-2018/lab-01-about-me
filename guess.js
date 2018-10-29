/* exported checkGuessNumber, resetGuessNumber */

var guessForm = document.getElementById('guess-form'); 
var guessResults = document.getElementById('guess-number-response'); 

var totalGuesses = 0; 

function checkGuessNumber() {
    var guess = guessForm.elements.number.value;
    if(guess == 7) {
        alert("Congrats, you guessed the correct number!"); 
    }

    else {
        alert("Sorry, you guessed wrong!")
        totalGuesses = totalGuesses +1; 
        console.log(totalGuesses); 
    }
    guessResults.textContent = "You have guessed " + totalGuesses + " time/s"; 

}

function resetGuessNumber() {
    var guess = guessForm.elements.number.value; 
    var submit = document.getElementById('submit');
    totalGuesses = 0;
}

