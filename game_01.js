/* exported answerSystem resetUserInput wordCheck */

// Whole-script strict mode syntax
'use strict';
var userInput = document.getElementById('about-me');
var systemResponse = document.getElementById('system-response');


function answerSystem() {

    var elements = userInput.elements;
    var burgersInput = elements.burgers;
    var likesBurgers = burgersInput.value;
    var tourInput = elements.tour;
    var hasBeen = tourInput.value;
    var learnInput = elements.learn;
    var learnSkills = learnInput.value; 
    
    var correct = 0;

    if(likesBurgers.toLowerCase() === 'no'){
        //run this code if correct
        correct += 1;
        burgersInput.classList.add('correct');
        burgersInput.classList.remove('incorrect');
    }
    else {
        //Run this code if incorrect
        burgersInput.classList.add('incorrect');
        burgersInput.classList.remove('correct');
    }
    if(hasBeen.toLowerCase() === 'no'){
        //run this code if correct
        correct += 1;
        tourInput.classList.add('correct');
        tourInput.classList.remove('incorrect');
    }
    else {
        //Run this code if incorrect
        tourInput.classList.add('incorrect');
        tourInput.classList.remove('correct');
    }
    if(learnSkills.toLowerCase() === 'no'){
        //run this code if correct
        correct += 1;
        learnInput.classList.add('correct');
        learnInput.classList.remove('incorrect');
    }
    else {
        //Run this code if incorrect
        learnInput.classList.add('incorrect');
        learnInput.classList.remove('correct');
    }
    systemResponse.textContent = 'You got ' + correct + ' out of 3';
}

function resetUserInput() {
    var elements = userInput.elements;
    var burgersInput = elements.burgers;
    var tourInput = elements.tour;
    var learnInput = elements.learn;
   
    
    
    burgersInput.classList.remove('correct');
    burgersInput.classList.remove('incorrect');
    burgersInput.classList.remove('incorrect');
    burgersInput.classList.remove('correct');
    
    tourInput.classList.remove('incorrect');
    tourInput.classList.remove('correct');
    tourInput.classList.remove('correct');
    tourInput.classList.remove('incorrect');
    
    learnInput.classList.remove('correct');
    learnInput.classList.remove('incorrect');
    learnInput.classList.remove('correct');
    learnInput.classList.remove('incorrect');
  
    
    
    systemResponse.textContent = '';
    
}
        
        
        



