var randomNumberForm = document.getElementById('random-number-form');

console.log(randomNumberForm)


// Submit button
function checkRandomNumber() {
    var elements = randomNumberForm.elements;
    var randomNumberInput = elements.randomNumberText;
    var numberGuessed = randomNumberInput.value;
}

// Reset button
function resetRandomNumber() {
    console.log('Reset button works')
}









//This program generates a random number between 1 and 10, you have 3 guesses to figure out the number

/*

START GAME
Generate a random number
var guessCount = 0;

GAMEPLAY LOOP
while (guessCount > 0):
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