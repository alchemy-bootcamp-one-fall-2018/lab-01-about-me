

var meQuizForm = document.getElementById('me-quiz-form');
var meQuizResponse = document.getElementById('me-quiz-response');

function checkMeQuiz() {

    var elements = meQuizForm.elements; 

    var question1Input = elements.question1;
    var boardingAnswer = question1Input.value;


    var question2Input = elements.question2;
    var catAnswer = question2Input.value;

    var question3Input = elements.question3;
    var authorAnswer = question3Input.value;

    var question4Input = elements.question4;
    var footballAnswer = question4Input.value;


    var question5Input = elements.question5;
    var ageAnswer = question5Input.value;

    var correct = 0;

    if(boardingAnswer === '19') {
        correct += 1;
        question1Input.classList.add('correct');
        question1Input.classList.remove('incorrect');
    } else if(boardingAnswer !== '') {
        question1Input.classList.add('incorrect');
        question1Input.classList.remove('correct');
    }

    if(catAnswer === 'white' || catAnswer === 'White') {
        correct += 1;
        question2Input.classList.add('correct');
        question2Input.classList.remove('incorrect');
    } else if(catAnswer !== '') {
        question2Input.classList.add('incorrect');
        question2Input.classList.remove('correct');
    }

    if(authorAnswer === 'Dostoyevsky' || authorAnswer === 'dostoyevsky') {
        correct += 1;
        question3Input.classList.add('correct');
        question3Input.classList.remove('incorrect');
    } else if(authorAnswer !== '') {
        question3Input.classList.add('incorrect');
        question3Input.classList.remove('correct');
    }

    if(footballAnswer === '2nd' || footballAnswer === 'second' || footballAnswer === 'Second') {
        correct += 1;
        question4Input.classList.add('correct');
        question4Input.classList.remove('incorrect');
    } else if(footballAnswer !== '') {
        question4Input.classList.add('incorrect');
        question4Input.classList.remove('correct');
    }

    if(ageAnswer === '26') {
        correct += 1;
        question5Input.classList.add('correct');
        question5Input.classList.remove('incorrect');
    } else if(ageAnswer !== '') {
        question5Input.classList.add('incorrect');
        question5Input.classList.remove('correct');
    }

    meQuizResponse.textContent = 'You got ' + correct + ' out of 5!';

}

function resetMeQuiz() {
    var elements = meQuizForm.elements;
    var question1Input = elements.question1;
    var question2Input = elements.question2;
    var question3Input = elements.question3;
    var question4Input = elements.question4;
    var question5Input = elements.question5;


    question1Input.classList.remove('correct');
    question1Input.classList.remove('incorrect');question2Input.classList.remove('correct');
    question2Input.classList.remove('incorrect');
    question3Input.classList.remove('correct');
    question3Input.classList.remove('incorrect');
    question4Input.classList.remove('correct');
    question4Input.classList.remove('incorrect');
    question5Input.classList.remove('correct');
    question5Input.classList.remove('incorrect');

    meQuizResponse.textContent = '';

}