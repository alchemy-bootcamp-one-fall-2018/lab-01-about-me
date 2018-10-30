/* eslint no-console: "off" */
/* exported TryQuerySelector, checkAboutMe */
'use strict';

var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('amount-me-response');

function checkAboutMe() {
    var elements = aboutMeForm.elements;
    
    var colorInput = elements.favColor;
    var color = colorInput.value;

//    var numInput = elements.favNum;
//    var color = numInput.value;

//    var schoolInput = elements.favSchool;
//    var color = schoolInput.value.toLowerCase();

//    var ageInput = elements.grayHair;
//    var color = ageInput.value;
    
//    var heightInput = elements.heightJumped;
//    var color = heightInput.value;

    var correct = 0;

    if(color.toLowerCase() === 'violet') {
        console.log('test yes');
        aboutMeResponse.textContent = 'correct';
        correct = correct + 1;
        color.classList.add('YAY!');
        color.classList.remove('Nah, try again.');
    } else if(color !== '') {
        console.log('test no');
        color.classList.add('Nah, try again.');
        color.classList.remove('YAY!');
    }


    aboutMeResponse.textContent = 'You got ' + correct + ' out of 2';

}