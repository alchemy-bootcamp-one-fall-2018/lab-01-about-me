/* exported checkAboutMe, resetAboutMe */

var aboutMeForm = document.getElementById('about-me')
var correctResponse = document.getElementById('correct-response')

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var dogInput = elements.dogs;
    var likeDogs = dogInput.value;

    var colorInput = elements.color;
    var purpleColor = colorInput.value;

    var countryInput = elements.country;
    var countryAnswer = countryInput.value;
    
    var dogName = elements.name;
    var nameInput = dogName.value;

    var ageInput = elements.age;
    var ageAnswer = ageInput.value;

    var correct = 0;

    if(likeDogs.toLowerCase() === 'yes' ||  likeDogs.toLowerCase() === 'absolutely') {
        correct = correct + 1;
        dogInput.classList.add('correct');
        dogInput.classList.remove('incorrect');

    }
    
    else if (likeDogs !=='') {
        dogInput.classList.add('incorrect');
        dogInput.classList.remove('correct');
    }
    if (purpleColor.toLowerCase() === 'lavender' || purpleColor.toLowerCase() === 'purple') {
        correct = correct + 1;
        colorInput.classList.add('correct');
        colorInput.classList.remove('incorrect');
    }

    else if (purpleColor !==''){
        colorInput.classList.remove('correct');
        colorInput.classList.add('incorrect');
    }

    if (countryAnswer.toLowerCase() === 'japan') {
        correct = correct + 1;
        countryInput.classList.add('correct');
        countryInput.classList.remove('incorrect');
    }
    else if (countryAnswer !=='') {
        countryInput.classList.add('incorrect');
        countryInput.classList.remove('correct')
    }

    if (nameInput.toLowerCase() === 'cheddar' || nameInput.toLowerCase() === 'pickles') {
        correct = correct + 1;
        dogName.classList.add('correct');
        dogName.classList.remove('incorrect');
    }
    
    else if (nameInput !== '') {
        dogName.classList.remove('correct');
        dogName.classList.add('incorrect');
    }

    if (ageAnswer == 22) {
        correct = correct + 1;
        ageInput.classList.add('correct');
        ageInput.classList.remove('incorrect');
    }

    else if (ageAnswer !== '') {
        ageInput.classList.add('incorrect');
        ageInput.classList.remove('correct');
    }
    correctResponse.textContent = 'You got ' + correct + ' out of 5'; 
}


function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var colorInput = elements.color;
    var countryAnswer = elements.country;
    var dogName = elements.name;
    var ageInput = elements.age;
    var dogInput = elements.dogs;

    dogInput.classList.remove('correct');
    dogInput.classList.remove('incorrect');
    colorInput.classList.remove('correct');
    colorInput.classList.remove('incorrect');
    countryAnswer.classList.remove('correct');
    countryAnswer.classList.remove('incorrect');
    dogName.classList.remove('correct');
    dogName.classList.remove('incorrect');
    ageInput.classList.remove('correct');
    ageInput.classList.remove('incorrect');
    

    correctResponse.textContent = '';

}  