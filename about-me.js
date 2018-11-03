/* eslint-disable no-unused-vars */
/* exported checkAboutMe, resetAboutMe */

// Good place to "initialize things" - meaning run
// once when the script is loaded
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    // this code is specific to when checkAnswers is called

    var elements = aboutMeForm.elements;

    var catsInput = elements.cats;
    var likeCats = catsInput.value;

    var boatsInput = elements.boats;
    var buildBoats = boatsInput.value;

    var motorcyclesInput = elements.motorcycles;
    var rideMotorcycles = motorcyclesInput.value;
    
    var coffeeInput = elements.coffee;
    var likeCoffee = coffeeInput.value;
    
    var sharksInput = elements.sharks;
    var swimSharks = sharksInput.value.toLowerCase();
    


    var correct = 0;

    if(likeCats.toLowerCase() === 'no') {
        // let's run this code if they like cats
        correct = correct + 1;
        catsInput.classList.add('correct');
        catsInput.classList.remove('incorrect');
    }
    else if(likeCats !== '') {
        catsInput.classList.add('incorrect');
        catsInput.classList.remove('correct');
    }
    
    if(buildBoats.toLowerCase() === 'yes') {
        correct = correct + 1;
        boatsInput.classList.add('correct');
        boatsInput.classList.remove('incorrect');
    }
    else if(buildBoats !== '') {
        boatsInput.classList.add('incorrect');
        boatsInput.classList.remove('correct');
    }
    
    if(rideMotorcycles.toLowerCase() === 'yes') {
        correct = correct + 1;
        motorcyclesInput.classList.add('correct');
        motorcyclesInput.classList.remove('incorrect');
    }
    else if(rideMotorcycles !== '') {
        motorcyclesInput.classList.add('incorrect');
        motorcyclesInput.classList.remove('correct');
    }
    
    if(likeCoffee.toLowerCase() === 'no') {
        correct = correct + 1;
        coffeeInput.classList.add('correct');
        coffeeInput.classList.remove('incorrect');
    }
    else if(likeCoffee !== '') {
        coffeeInput.classList.add('incorrect');
        coffeeInput.classList.remove('correct');
    }
    
    if(swimSharks.toLowerCase() === 'yes') {
        correct = correct + 1;
        sharksInput.classList.add('correct');
        sharksInput.classList.remove('incorrect');
    }
    else if(swimSharks !== '') {
        sharksInput.classList.add('incorrect');
        sharksInput.classList.remove('correct');
    }
    
    aboutMeResponse.textContent = 'You got ' + correct + ' out of 5';
}

function newFunction() {
    return 0;
}

    // lots of chaining
    // document.getElementById('question-two').classList.remove('hidden');


function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var catsInput = elements.cats;
    

    catsInput.classList.remove('correct');
    catsInput.classList.remove('incorrect');
    

    aboutMeResponse.textContent = '';

}

