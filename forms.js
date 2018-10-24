var critters = document.getElementById('critters-form');
// var message = document.getElementById('critter-form-response');
var dogInput = critters.elements.dogs;
var catInput = critters.elements.cats;
var parrotInput = critters.elements.parrot;
var turtleInput = critters.elements.turtle;
var chickenInput = critters.elements.chicken;
var correct = 0;

function checkCritters() {
    
    if(dogInput.value.toLowerCase() === 'yes') {
        correct = correct + 1;
        dogInput.classList.add('correct');
    }
    else {
        dogInput.classList.add('incorrect');
    }

    if(catInput.value.toLowerCase() === 'yes') {
        correct = correct + 1;
        catInput.classList.add('correct');
    }
    else {
        catInput.classList.add('incorrect');
    }  

    if(parrotInput.value.toLowerCase() === 'yes') {
        correct = correct + 1;
        parrotInput.classList.add('correct');
    }
    else {
        parrotInput.classList.add('incorrect');
    }  

    if(turtleInput.value.toLowerCase() === 'no') {
        correct = correct + 1;
        turtleInput.classList.add('correct');
    }
    else {
        turtleInput.classList.add('incorrect');
    }

    if(chickenInput.value.toLowerCase() === 'yes') {
        correct = correct + 1;
        chickenInput.classList.add('correct');
    }
    else {
        chickenInput.classList.add('incorrect');
    }
    message.textContent = 'You got ' + correct + ' right out of 5!';
}

function resetCritters() {
    
    dogInput.classList.remove('correct');
    dogInput.classList.remove('incorrect');
    catInput.classList.remove('correct');
    catInput.classList.remove('incorrect');
    parrotInput.classList.remove('correct');
    parrotInput.classList.remove('incorrect');
    turtleInput.classList.remove('correct');
    turtleInput.classList.remove('incorrect');
    chickenInput.classList.remove('correct');
    chickenInput.classList.remove('incorrect');

    dogInput.value = '';
    catInput.value = '';
    parrotInput.value = '';
    turtleInput.value = '';
    chickenInput.value = '';
    message.textContent = '';
}