/* exported checkAboutMe, quizForm */

var quizForm = document.getElementById('quiz');
var quizResponse = document.getElementById('quiz-response');

var correct = 0;

function checkAboutMe() {
    var elements = quizForm.elements;

    var chocMeltInput = elements.melt;
    var chocMelt = chocMeltInput.value; 

    var petInput = elements.pet;
    var favPet = petInput.value;

    var fiberInput = elements.fiber;
    var favFiber = fiberInput.value;

    var gameInput = elements.game;
    var likeGame = gameInput.value;

    var junkieInput = elements.junkie;
    var kindaJunkie = junkieInput.value;


    if(chocMelt === 'tongue'){
        correct++;
    }   
    if(favPet === 'dog'){
        correct++;
    }
    if(favFiber === 'yarn'){
        correct++;
    }
    if(likeGame === 'puzzle') {
        correct++;
    }
    if(kindaJunkie === 'books') {
        correct++;
    }
    var score = (correct / 5) * 100;
    quizResponse.textContent = 'You scored ' + score + 'percent';
    correct = 0;    
}

function resetAboutMe() {
    correct = 0;
    quizResponse.textContent = '';
}
