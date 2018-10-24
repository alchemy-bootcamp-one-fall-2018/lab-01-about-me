var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');
/* eslint-disable-next-line no-unused-vars */
function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var question1Input = elements.question1Input;
    var answer1 = question1Input.value;


    var question2Input = elements.question2Input;
    var answer2 = question2Input.value;


    var question3Input = elements.question3Input;
    var answer3 = question3Input.value;


    var question4Input = elements.question4Input;
    var answer4 = question4Input.value;


    var question5Input = elements.question5Input;
    var answer5 = question5Input.value;

    var correct;

    if(answer1 === 'correct') {
        correct += 1;
        question1Input.classList.add('correct');
        question1Input.classList.remove('incorrect');
    }
    else if(answer1 !== '') {
        question1Input.classList.remove('correct');
        question1Input.classList.add('incorrect');
    }
    if(answer2 === 'correct') {
        correct += 1;
        question2Input.classList.add('correct');
        question2Input.classList.remove('incorrect');
    }
    else if(answer2 !== '') {
        question2Input.classList.remove('correct');
        question2Input.classList.add('incorrect');
    }
    if(answer3 === 'correct') {
        correct += 1;
        question3Input.classList.add('correct');
        question3Input.classList.remove('incorrect');
    }
    else if(answer3 !== '') {
        question3Input.classList.remove('correct');
        question3Input.classList.add('incorrect');
    }
    if(answer4 === 'correct') {
        correct += 1;
        question4Input.classList.add('correct');
        question4Input.classList.remove('incorrect');
    }
    else if(answer4 !== '') {
        question4Input.classList.remove('correct');
        question4Input.classList.add('incorrect');
    }
    if(answer5 === 'correct') {
        correct += 1;
        question5Input.classList.add('correct');
        question5Input.classList.remove('incorrect');
    }
    else if(answer5 !== '') {
        question5Input.classList.remove('correct');
        question5Input.classList.add('incorrect');
    }
    aboutMeResponse.textContext = 'Answered' + correct + 'out of 5';
}


function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var question1Input = elements.question1Input;
    var question2Input = elements.question2Input;
    var question3Input = elements.question3Input;
    var question4Input = elements.question4Input;
    var question5Input = elements.question5Input;

    question1Input.classList.remove('correct');
    question1Input.classList.remove('incorrect');

    question2Input.classList.remove('correct');
    question2Input.classList.remove('incorrect');

    question3Input.classList.remove('correct');
    question3Input.classList.remove('incorrect');

    question4Input.classList.remove('correct');
    question4Input.classList.remove('incorrect');

    question5Input.classList.remove('correct');
    question5Input.classList.remove('incorrect');

}
