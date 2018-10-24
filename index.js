/* exported checkAboutMe, checkGuessingGame */

var aboutMeForm = document.getElementById('about-me-game');
var aboutMeAnswerCounter = document.getElementById('about-me-output');

function checkAboutMe() {
    var aboutMeForm = document.getElementById('about-me-game');
    var elements = aboutMeForm.elements;
    var questionOneInput = elements.questionOneName.value.toLowerCase();
    
    var aboutMeForm = document.getElementById('about-me-game');
    var elements = aboutMeForm.elements;
    var questionTwoInput = elements.questionTwoName.value.toLowerCase();

    var aboutMeForm = document.getElementById('about-me-game');
    var elements = aboutMeForm.elements;
    var questionThreeInput = elements.questionThreeName.value.toLowerCase();

    var aboutMeForm = document.getElementById('about-me-game');
    var elements = aboutMeForm.elements;
    var questionFourInput = elements.questionFourName.value.toLowerCase();

    var aboutMeForm = document.getElementById('about-me-game');
    var elements = aboutMeForm.elements;
    var questionFiveInput = elements.questionFiveName.value.toLowerCase();



    var counter = 0;
    if(questionOneInput === 'cycling'){
        counter = counter + 1;
    }

    if(questionTwoInput === 'bjj'){
        counter = counter + 1;
    }

    if(questionThreeInput === 'acl'){
        counter = counter + 1;
    }

    if(questionFourInput === 'smart contracts'){
        counter = counter + 1;
    }

    if(questionFiveInput === 'lance'){
        counter = counter + 1;
    }

    aboutMeAnswerCounter.textContent = 'you have ' + counter + ' correct!';

}


var guessingGameForm = document.getElementById('guessingGame');
var guessingGameOutput = document.getElementById('guessingGameOutput');
var guessingGameCounter = 0;

function checkGuessingGame() {

    var randomNumber = Math.floor(Math.random() * 5);
    var elements = guessingGameForm.elements;
    var userGuess = elements.guessNumber.value;

    console.log(userGuess);
    if (userGuess == randomNumber){
        guessingGameOutput.textContent = 'Correct!';
        guessingGameCounter = 0;
    }
    else {
        guessingGameCounter = guessingGameCounter + 1;
        guessingGameOutput.textContent = 'Wrong, you have ' + guessingGameCounter + 'guesses left';
            
    }
        
}
