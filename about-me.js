/* exported checkAboutMe, resetAboutMe */
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {

    var elements = aboutMeForm.elements;

    var breedInput = elements.breed;
    var likeBreed = breedInput.value;

    var smartInput = elements.smart;
    var likeSmart = smartInput.value;

    var beautifulInput = elements.beautiful;
    var likeBeautiful = beautifulInput.value;

    var loyalInput = elements.loyal;
    var likeLoyal = loyalInput.value;

    var catsInput = elements.cats;
    var likeCats = catsInput.value;

    var correct = 0;

    if(likeBreed.toLowerCase() === 'yes') {
        correct = correct + 1;
        breedInput.classList.add('correct');
        breedInput.classList.remove('incorrect');
    }
    else if(likeBreed !== '') {
        breedInput.classList.add('incorrect');
        breedInput.classList.remove('correct');
    }

    if(likeSmart.toLowerCase() === 'no') {
        correct = correct + 1;
        smartInput.classList.add('correct');
        smartInput.classList.remove('incorrect');
    }
    else if(likeSmart !== '') {
        smartInput.classList.add('incorrect');
        smartInput.classList.remove('correct');
    }

    if(likeBeautiful.toLowerCase() === 'yes') {
        correct = correct + 1;
        beautifulInput.classList.add('correct');
        beautifulInput.classList.remove('incorrect');
    }
    else if(likeBeautiful !== '') {
        beautifulInput.classList.add('incorrect');
        beautifulInput.classList.remove('correct');
    }

    if(likeLoyal.toLowerCase() === 'yes') {
        correct = correct + 1;
        loyalInput.classList.add('correct');
        loyalInput.classList.remove('incorrect');
    }
    else if(likeLoyal !== '') {
        loyalInput.classList.add('incorrect');
        loyalInput.classList.remove('correct');
    }

    if(likeCats.toLowerCase() === 'no') {
        correct = correct + 1;
        catsInput.classList.add('correct');
        catsInput.classList.remove('incorrect');
    }
    else if(likeCats !== '') {
        catsInput.classList.add('incorrect');
        catsInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You answered ' + correct + ' out of 5 correctly.';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var breedInput = elements.breed;
    var smartInput = elements.smart;
    var beautifulInput = elements.beautiful;
    var loyalInput = elements.loyal;
    var catsInput = elements.cats;

    breedInput.classList.remove('correct');
    breedInput.classList.remove('incorrect');
    smartInput.classList.remove('correct');
    smartInput.classList.remove('incorrect');
    beautifulInput.classList.remove('correct');
    beautifulInput.classList.remove('incorrect');
    loyalInput.classList.remove('correct');
    loyalInput.classList.remove('incorrect');
    catsInput.classList.remove('correct');
    catsInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';

}