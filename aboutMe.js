var aboutMeForm1 = document.getElementById('about-me-quiz-1')
var aboutMeResponse1 = document.getElementById('about-me-quiz-1-response')
var correct = 0

function checkAboutMe() {

    var elements = aboutMeForm1.elements;

    var snakesInput = elements.snakes;
    var likeSnakes = snakesInput.value;

    var cakeInput = elements.cake;
    var likeCake = cakeInput.value;

    var morningInput = elements['morning'];
    var likeMorning = morningInput.value;

    var puppiesInput = elements.puppies;
    var likePuppies = puppiesInput.value;

    var dragonsInput = elements.dragons;
    var likeDragons = dragonsInput.value;

    if(likeSnakes.toLowerCase() === 'yes') {
        correct = correct + 1;
        snakesInput.classList.add('correct');
        snakesInput.classList.remove('incorrect');
    }
    else if(likeSnakes !== '') {
        snakesInput.classList.add('incorrect');
        snakesInput.classList.remove('correct');
    }

    if(likeCake.toLowerCase() === 'yes') {
        correct = correct + 1;
        cakeInput.classList.add('correct');
        cakeInput.classList.remove('incorrect');
    }
    else if(likeCake !== '') {
        cakeInput.classList.add('incorrect');
        cakeInput.classList.remove('correct');
    }

    if(likeMorning.toLowerCase() === 'no') {
        correct = correct + 1;
        morningInput.classList.add('correct');
        morningInput.classList.remove('incorrect');
    }
    else if(likeMorning !== '') {
        morningInput.classList.add('incorrect');
        morningInput.classList.remove('correct');
    }

    if(likePuppies.toLowerCase() === 'yes') {
        correct = correct + 1;
        puppiesInput.classList.add('correct');
        puppiesInput.classList.remove('incorrect');
    }
    else if(likePuppies !== '') {
        puppiesInput.classList.add('incorrect');
        puppiesInput.classList.remove('correct');
    }

    if(likeDragons.toLowerCase() === 'yes') {
        correct = correct + 1;
        dragonsInput.classList.add('correct');
        dragonsInput.classList.remove('incorrect');
    }
    else if(likeDragons !== '') {
        dragonsInput.classList.add('incorrect');
        dragonsInput.classList.remove('correct');
    }

    aboutMeResponse1.textContent = 'You got ' + correct + ' out of 5';
}

function resetAboutMe() {
    var elements = aboutMeForm1.elements;
    var snakesInput = elements.snakes;
    var cakeInput = elements.cake;
    var morningInput = elements.morning;
    var puppiesInput = elements.puppies;
    var dragonsInput = elements.dragons;

    snakesInput.classList.remove('correct');
    snakesInput.classList.remove('incorrect');
    cakeInput.classList.remove('correct');
    cakeInput.classList.remove('incorrect');
    morningInput.classList.remove('correct');
    morningInput.classList.remove('incorrect');
    puppiesInput.classList.remove('correct');
    puppiesInput.classList.remove('incorrect');
    dragonsInput.classList.remove('correct');
    dragonsInput.classList.remove('incorrect');

    aboutMeResponse1.textContent = '';

}
