//Initializing for when script loads

var critters = document.getElementById('critters-form');
var message = document.getElementById('critter-form-response');
var dogInput = critters.elements.dogs;
var catInput = critters.elements.cats;


function checkCritters() {
    // var likeDogs = dogsInput.value;

    // var name = dogInput.value;

    if(dogInput.value.toLowerCase() === 'yes') {
        dogInput.classList.add('correct');
    }
    else {
        dogInput.classList.add('incorrect');
    }

    if(catInput.value.toLowerCase() === 'yes') {
        catInput.classList.add('correct');
    }
    else {
        catInput.classList.add('incorrect');
    }  
}
function resetCritters() {
    
    dogInput.classList.remove('correct');
    dogInput.classList.remove('incorrect');
    catInput.classList.remove('correct');
    catInput.classList.remove('incorrect');

    dogInput.value = '';
    catInput.value = '';


    // message.textContent = '';
}