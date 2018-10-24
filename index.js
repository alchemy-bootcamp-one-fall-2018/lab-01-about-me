/* exported checkAboutMe, checkGuessingGame, resetAboutMe, resetGuessingGame */

var aboutMeForm = document.getElementById('about-me-game');
var aboutMeAnswerCounter = document.getElementById('about-me-output');

function checkAboutMe() {

    var elements1 = aboutMeForm.elements;
    var questionOneInput = elements1.questionOneName.value.toLowerCase();

    var elements2 = aboutMeForm.elements;
    var questionTwoInput = elements2.questionTwoName.value.toLowerCase();

    var elements3 = aboutMeForm.elements;
    var questionThreeInput = elements3.questionThreeName.value.toLowerCase();

    var elements4 = aboutMeForm.elements;
    var questionFourInput = elements4.questionFourName.value.toLowerCase();

    var elements5 = aboutMeForm.elements;
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

function resetAboutMe(){
    aboutMeAnswerCounter.textContent = '';
}


var guessingGameForm = document.getElementById('guessingGame');
var guessingGameOutput = document.getElementById('guessingGameOutput');
var guessingGameCounter = 5;

function checkGuessingGame() {
    
    var elements = guessingGameForm.elements;
    var userGuess = elements.guessNumber.value;
// eslint-disable-next-line eqeqeq
    if(userGuess == 3){
        guessingGameOutput.textContent = 'Correct!';
    
    }
    else {
        guessingGameCounter = guessingGameCounter - 1;
        if(guessingGameCounter < 5){
            guessingGameOutput.textContent = 'Wrong, you have ' + guessingGameCounter + ' guesses left';
        }
            
    }
        
}

function resetGuessingGame() {
    guessingGameOutput.textContent = '';
    guessingGameCounter = 5;
}
