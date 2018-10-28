/* exported checkAboutMe, resetAboutMe, aboutMeResponse*/
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var classInput = elements.class;
    var likeClassmates = classInput.value;

    /*var guessInput = elements.guess;
    var age = guessInput.value;

    var thingInput = elements.thing;
    var favoriteThing = thingInput.value;

    var teachInput = elements.teach;
    var teachingClass = teachInput.value;

    var placeInput = elements.place;
    var favoritePlace = placeInput.value;*/

    var correct = 0;

    if(likeClassmates() === 'classmates') {
        correct = correct ++;
        classInput.classList.add('correct');
        classInput.class.remove('incorrect');
    } else if(likeClassmates !== '') {
        classInput.classList.add('wrong');
        classInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'Your score is' + correct + 'out of 5';
}
/*
function submit {
    var newVar = document.getElementById("submitCheckbox");
}
console.log ("Help me");*/