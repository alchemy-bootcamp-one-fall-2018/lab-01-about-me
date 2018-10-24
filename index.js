/* exported answerSystem resetUserInput wordCheck */
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
        
    }
    else {
        //Run this code if incorrect
        burgersInput.classList.add('incorrect');
       
    }
    if(hasBeen.toLowerCase() === 'no'){
        //run this code if correct
        correct += 1;
        tourInput.classList.add('correct');
        
    }
    else {
        //Run this code if incorrect
        tourInput.classList.add('incorrect');
        
    }
    if(learnSkills.toLowerCase() === 'no'){
        //run this code if correct
        correct += 1;
        learnInput.classList.add('correct');
    }
    else {
        //Run this code if incorrect
        burgersInput.classList.add('incorrect');
    }
    
    systemResponse.textContent = 'You got ' + correct + ' out of 3';
}
function resetUserInput() {
    var elements = userInput.elements;
    var burgersInput = elements.burgers;
    var tourInput = elements.tour;
    var learnInput = elements.learn;
    var answerInput = elements.answer;
    burgersInput.classList.remove('correct');
    burgersInput.classList.remove('incorrect');
    tourInput.classList.remove('correct');
    tourInput.classList.remove('incorrect');
    learnInput.classList.remove('correct');
    learnInput.classList.remove('incorrect');
    answerInput.classList.remove('correct');
    answerInput.classList.remove('incorrect');

    systemResponse.textContent = '';

}
// //Second Game js
var userAgent = document.getElementById('wordAnswer');
var machineResponse = document.getElementById('machine-response');

//console.log(check);

function wordCheck() {
    
    var regex = /(\w)\1+/g;
    var elements = userAgent.elements;

    var answerInput = elements.answer;
    var theAnswer = answerInput.value;
    //console.log('THE VALUE\n' + typeof answerInput.value); //<--looking to see what we are collecting, a string?, an array? an object?, 
                                    //turns out it's an object
                                   //Do we need to turn an object string before running the condition also looks like .match could be replaced with .test  

    
    if(theAnswer.match(regex)) {
        //run this code if correct
        //return true;--You are already retrieving a boolean, now you're asking for another boolean 
        //console.log('answerInput.value');
        answerInput.classList.add('correct');
        machineResponse.textContent = theAnswer + ' can pass through the Green Glass Door';
        
    }
    else {
        //Run this code if incorrect
       // return false;--You are already retrieving a boolean, now you're asking for another boolean 
        //console.log('Nope');
        answerInput.classList.add('incorrect');
        machineResponse.textContent = theAnswer + ' cannot pass through the Green Glass Door';
       
    }
        
    
}
