var randomNumberForm = document.getElementById('random-number-form');

var guessCounter = 0;


    
/*

START GAME      DONE
Generate a random number DONE
var guessCount = 0; DONE

GAMEPLAY LOOP
while (guessCount > 0): DONE
    Prompt user for input
    Check if user input is between 1 & 10
    Check if input === randomNumber
    if (correct number):
        print(you win)
    else:
        if (guess > randomNumber):
            print(too high)
            add 1 to guessCount
        else:
            print(too low)
            add 1 to guessCount

USER LOSES
if (guessCount === 0):
    print(you lose)
*/
    


// Submit button
function checkRandomNumber() {
    var elements = randomNumberForm.elements;
    var randomNumberInput = elements.randomNumberText;
    var numberGuessed = randomNumberInput.value;
    var secretNumber = 7;

    if (numberGuessed == secretNumber) {
        console.log('You win!')
    }
    else {
        console.log('Wrong')
    }

}

// Reset button
function resetRandomNumber() {
    console.log('Reset button works')
}







