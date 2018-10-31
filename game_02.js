/* exported answerSystem resetUserInput wordCheck */

// Whole-script strict mode syntax
'use strict';
var userAgent = document.getElementById('wordAnswer');
var machineResponse = document.getElementById('machine-response');

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