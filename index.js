


var aboutMeForm= document.getElementById('about-me-game');
var aboutMeAnswerCounter = document.getElementById('about-me-output');

function checkAboutMe() {
var aboutMeForm= document.getElementById('about-me-game');
var elements = aboutMeForm.elements;
var questionOneInput = elements.questionOneName.value.toLowerCase();

var aboutMeForm= document.getElementById('about-me-game');
var elements = aboutMeForm.elements;
var questionTwoInput = elements.questionTwoName.value.toLowerCase();

var aboutMeForm= document.getElementById('about-me-game');
var elements = aboutMeForm.elements;
var questionThreeInput = elements.questionThreeName.value.toLowerCase();

var aboutMeForm= document.getElementById('about-me-game');
var elements = aboutMeForm.elements;
var questionFourInput = elements.questionFourName.value.toLowerCase();

var aboutMeForm= document.getElementById('about-me-game');
var elements = aboutMeForm.elements;
var questionFiveInput = elements.questionFiveName.value.toLowerCase();



var counter = 0
if(questionOneInput === 'cycling'){
counter = counter +1;
};

if(questionTwoInput==='bjj'){
    counter = counter +1;
};

if(questionThreeInput==='acl'){
    counter = counter +1;
};

if(questionFourInput==='smart contracts'){
    counter = counter +1;
};

if(questionFiveInput==='lance'){
    counter = counter +1;
};

aboutMeAnswerCounter.textContent= 'you have '+ counter + ' correct!';

console.log('test', questionOneInput, questionTwoInput, counter)

};


function resetAboutMe() {};