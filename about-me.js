/*exported checkAboutMe, resetAboutMe*/

// Initializing things
// once when the script is loaded
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');


function checkAboutMe() {
    // this code is specific to when checkAnswers is called

    var elements = aboutMeForm.elements;

    var ageInput = elements.number;
    var correctAge = ageInput.value;

    var majorInput = elements.major;
    var correctMajor = majorInput.name.toLowerCase();

    var instrumentInput = elements.instruments;
    var correctInstrument = instrumentInput.value;

    var hobbiesInput = elements.hobbies;
    var correctHobbies = hobbiesInput.value;

    var correct = 0;

    if(correctAge === 'correctAge') {
        //run this code if they get the correct age
        correct = correct + 1;
        ageInput.classList.add('correct');
        ageInput.classList.remove('incorrect');
    }
    else if(ageInput !== 'correctAge' || ageInput === '') {
        ageInput.classList.add('incorrect');
        ageInput.classList.remove('correct');
    }

    /* add hometown conditionals here later*/
    
    if(correctMajor === 'correctMajor') {
        // this only runs if true
        correct = correct + 1;
        majorInput.classList.add('correct');
        majorInput.classList.remove('incorrect');
    } 
    else if(majorInput !== 'correctMajor') {
        majorInput.classList.add('incorrect');
        majorInput.classList.remove('correct');
    }

    if(correctInstrument === 'bass' || correctInstrument === 'guitar' || correctInstrument === 'drums' || correctInstrument === 'trumpet' || correctInstrument === 'piano') {
        // this only runs if true
        correct = correct + 1;
        instrumentInput.classList.add('correct');
        instrumentInput.classList.remove('incorrect');
    } 
    else if(correctInstrument !== '') {
        instrumentInput.classList.add('incorrect');
        instrumentInput.classList.remove('correct');
    }

    if(correctHobbies === 'hiking' && correctHobbies === 'playing music') {
        // this only runs if true
        correct = correct + 1;
        hobbiesInput.classList.add('correct');
        hobbiesInput.classList.remove('incorrect');
    } 
    else if(correctHobbies !== '') {
        hobbiesInput.classList.add('incorrect');
        hobbiesInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 5';


}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var ageInput = elements.number;   
    var majorInput = elements.major;
    var instrumentInput = elements.instruments;
    var hobbiesInput = elements.hobbies;


    ageInput.classList.remove('correct');
    ageInput.classList.remove('incorrect');
    majorInput.classList.remove('correct');
    majorInput.classList.remove('incorrect');
    instrumentInput.classList.remove('correct');
    instrumentInput.classList.remove('incorrect');
    hobbiesInput.classList.remove('correct');
    hobbiesInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';

}


