/* exported checkAboutMe, resetAboutMe */

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

    aboutMeAnswerCounter.textContent = 'you have ' + counter + '/5 correct!';

}

function resetAboutMe(){
    aboutMeAnswerCounter.textContent = '';
}
