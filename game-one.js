/* exported checkGameOne checkAboutMe resetAboutMe resetGameOne */
'use strict';

var gameOneForm = document.getElementById('game-one-form');
var gameOneResponse = document.getElementById('game-one-response');

function checkGameOne() {

    var elements = gameOneForm.elements;

    var nameInput = elements.name;
    var correctName = nameInput.value;

    var birthdayInput = elements.birthday;
    var birthdayAge = birthdayInput.value;

    var colorInput = elements.color;
    var colorPurple = colorInput.value.toLowerCase();

    var numberInput = elements.number;
    var number27 = numberInput.value;

    var dogsInput = elements.dogs;
    var likeDogs = dogsInput.value.toLowerCase();

    var correct = 0;

    
    if(correctName === 'Teonna'){
        correct = correct + 1;
    }
    
    if(birthdayAge === '31') {
        correct = correct + 1;
    }    

    if(colorPurple.toLowerCase() === 'yes') {
        correct = correct + 1;
    }

    if(number27 === '27'){
        correct = correct + 1;
    }

    if(likeDogs.toLowerCase() === 'yes'){
        correct = correct + 1;
    }

    gameOneResponse.textContent = 'You got ' + correct + ' right!';
}

function resetGameOne() {
    gameOneResponse.textContent = '';
}

