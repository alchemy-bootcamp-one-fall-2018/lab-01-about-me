var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    // this code is specific to when checkAnswers is called

    var elements = aboutMeForm.elements;

    var catsInput = elements.cats;
    var likeCats = catsInput.value.toLowerCase();
    
    var foodInput = elements.food;
    var favoriteFood = foodInput.value.toLowerCase();

    var instrumentInput = elements.instrument;
    var playInstrument = instrumentInput.value.toLowerCase();

    // var foodInput = elements.food;
    // var favoriteFood = foodInput.value.toLowerCase();

    // var foodInput = elements.food;
    // var favoriteFood = foodInput.value.toLowerCase();

    var correct = 0;

    if(likeCats.toLowerCase() === 'no') {
        // Run this code if answer is negative 
        correct = correct + 1;
        catsInput.classList.add('correct');
        catsInput.classList.remove('incorrect');
    }
    else if(likeCats !== '') {
        catsInput.classList.add('incorrect');
        catsInput.classList.remove('correct');
    }
    
    if(favoriteFood === 'kale' || favoriteFood === 'pineapple') {
        // Run this code if true
        correct = correct + 1;
        foodInput.classList.add('correct');
        foodInput.classList.remove('incorrect');
    } 
    else if(favoriteFood !== '') {
        foodInput.classList.add('incorrect');
        foodInput.classList.remove('correct');
    }

    if(playInstrument === 'violin') {
      // Run this code if true
        correct = correct + 1;
        instrumentInput.classList.add('correct');
        instrumentInput.classList.remove('incorrect');
    } 
    else if(playInstrument !== '') {
        instrumentInput.classList.add('incorrect');
        instrumentInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You scored ' + correct + ' out of 3';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var catsInput = elements.cats;
    var foodInput = elements.food;
    var instrumentInput = elements.instrument;

    catsInput.classList.remove('correct');
    catsInput.classList.remove('incorrect');
    foodInput.classList.remove('correct');
    foodInput.classList.remove('incorrect');
    instrumentInput.classList.remove('correct');
    instrumentInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';

}