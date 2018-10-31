/* exported checkAboutMe, resetAboutMe, aboutMeResponse*/
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var classInput = elements.class;
    var likeClassmates = classInput.value;

    var guessInput = elements.guess;
    var guessAge = guessInput.value;

    var thingInput = elements.thing;
    var favoriteThing = thingInput.value;

    var teachInput = elements.teach;
    var teachingClass = teachInput.value;

    var placeInput = elements.place;
    var favoritePlace = placeInput.value;

    var correct = 0;

    if(likeClassmates.toLowerCase() === 'classmates') {
        correct = correct + 1;
        classInput.classList.add('correct');
        classInput.classList.remove('wrong');
    } else if(likeClassmates !== '') {
        classInput.classList.add('wrong');
        classInput.classList.remove('correct');
    }

    if(guessAge === '33') {
        correct = correct + 1;
        guessInput.classList.add('correct');
        guessInput.classList.remove('wrong');
    } else if(guessAge !== '') {
        guessInput.classList.add('wrong');
        guessInput.classList.remove('correct');
    }

    if(favoriteThing.toLowerCase() === 'food') {
        correct = correct + 1;
        thingInput.classList.add('correct');
        thingInput.classList.remove('wrong');
    } else if(likeClassmates !== '') {
        thingInput.classList.add('wrong');
        thingInput.classList.remove('correct');
    }

    if(teachingClass === 'no') {
        correct = correct + 1;
        teachInput.classList.add('correct');
        teachInput.classList.remove('wrong');
    } else if(guessAge !== '') {
        teachInput.classList.add('wrong');
        teachInput.classList.remove('correct');
    }

    if(favoritePlace === 'home') {
        correct = correct + 1;
        placeInput.classList.add('correct');
        placeInput.classList.remove('wrong');
    } else if(guessAge !== '') {
        placeInput.classList.add('wrong');
        placeInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'Your score is' + correct + 'out of 5';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var classInput = elements.class;
    var guessInput = elements.guess;
    var thingInput = elements.thing;
    var teachInput = elements.teach;
    var placeInput = elements.place;

    classInput.classList.remove('correct');
    classInput.classList.remove('wrong');
    guessInput.classList.remove('correct');
    guessInput.classList.remove('wrong');
    thingInput.classList.remove('correct');
    thingInput.classList.remove('wrong');
    teachInput.classList.remove('correct');
    teachInput.classList.remove('wrong');
    placeInput.classList.remove('correct');
    placeInput.classList.remove('wrong');

    aboutMeResponse.textContent = '';
}