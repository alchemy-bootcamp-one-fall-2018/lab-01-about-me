/* exported checkAboutMe, checkGuessingGame */

var aboutMeForm = document.getElementById('about-me-game');
var aboutMeAnswerCounter = document.getElementById('about-me-output');

function checkAboutMe() {
    var aboutMeForm = document.getElementById('about-me-game');
    var elements = aboutMeForm.elements;
    var questionOneInput = elements.questionOneName.value.toLowerCase();

    var aboutMeForm2 = document.getElementById('about-me-game');
    var elements2 = aboutMeForm2.elements;
    var questionTwoInput = elements2.questionTwoName.value.toLowerCase();

    var aboutMeForm3 = document.getElementById('about-me-game');
    var elements3 = aboutMeForm3.elements;
    var questionThreeInput = elements3.questionThreeName.value.toLowerCase();

    var aboutMeForm4 = document.getElementById('about-me-game');
    var elements4 = aboutMeForm4.elements;
    var questionFourInput = elements4.questionFourName.value.toLowerCase();

    var aboutMeForm5 = document.getElementById('about-me-game');
    var elements5 = aboutMeForm5.elements;
    var questionFiveInput = elements5.questionFiveName.value.toLowerCase();



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
var guessingGameCounter = 5;

function checkGuessingGame() {
    
    var elements = guessingGameForm.elements;
    var userGuess = elements.guessNumber.value;

    if(userGuess == 3){
        guessingGameOutput.textContent = 'Correct!';
    
    }
    else {
        guessingGameCounter = guessingGameCounter - 1;
        if(guessingGameCounter < 4){
            guessingGameOutput.textContent = 'Wrong, you have ' + guessingGameCounter + ' guesses left';
        }
            
    }
        
}
