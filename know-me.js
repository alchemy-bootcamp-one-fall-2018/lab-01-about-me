/*exported checkAboutMe, resetAboutMe */

var knowMeQuiz = document.getElementById('know-me-quiz');
var knowMeResponse = document.getElementById('know-me-response');

function checkAboutMe() {
    var elements = knowMeQuiz.elements;

    var potterInput = elements.potter;
    var likePotter = potterInput.value;

    var movieInput = elements.movie;
    var favoriteMovie = movieInput.value;

    var goldendoodleInput = elements.goldendoodle;
    var goldendoodleOrCats = goldendoodleInput.value;

    var hobbiesInput = elements.hobbies;
    var fancyHobbies = hobbiesInput.value;

    var natureInput = elements.nature;
    var natureLike = natureInput.value;

    var correct = 0;

    if(likePotter.toLowerCase () === 'yes') {
        correct = correct + 1;
        potterInput.classList.add('correct');
        potterInput.classList.remove('incorrect');
    }
    else if(potterInput !== '') {
        potterInput.classList.add('incorrect');
        potterInput.classList.add('correct');
    }

    if(favoriteMovie === 'You\'ve Got Mail') {
        correct = correct + 1;
        movieInput.classList.add('correct');
        movieInput.classList.remove('incorrect');
    } 
    else if(favoriteMovie !== '') {
        movieInput.classList.add('incorrect');
        movieInput.classList.remove('correct');
    }

    if(goldendoodleOrCats.toLowerCase () === 'true') {
        correct = correct + 1;
        goldendoodleInput.classList.add('correct');
        goldendoodleInput.classList.remove('incorrect');
    }
    else if(goldendoodleOrCats !== '') {
        goldendoodleInput.classList.add('incorrect');
        goldendoodleInput.classList.add('correct');
    }

    if(fancyHobbies.toLowerCase () === 'yes') {
        correct = correct + 1;
        hobbiesInput.classList.add('correct');
        hobbiesInput.classList.remove('incorrect');
    }
    else if(fancyHobbies !== '') {
        hobbiesInput.classList.add('incorrect');
        hobbiesInput.classList.add('correct');
    }

    if(natureLike.toLowerCase () === 'yes') {
        correct = correct + 1;
        natureInput.classList.add('correct');
        natureInput.classList.remove('incorrect');
    }
    else if(natureLike !== '') {
        natureInput.classList.add('incorrect');
        natureInput.classList.add('correct');
    }

    knowMeResponse.textContent = 'You got' + correct + 'out of 5';

}

function resetAboutMe() {
    var elements = knowMeQuiz.elements;
    var potterInput = elements.potter;
    var movieInput = elements.movie;
    var goldendoodleInput = elements.goldendoodle;
    var hobbiesInput = elements.hobbies;
    var natureInput = elements.nature;

    potterInput.classList.remove('correct');
    potterInput.classList.remove('incorrect');
    movieInput.classList.remove('correct');
    movieInput.classList.remove('incorrect');
    goldendoodleInput.classList.remove('correct');
    goldendoodleInput.classList.remove('incorrect');
    hobbiesInput.classList.remove('correct');
    hobbiesInput.classList.remove('incorrect');
    natureInput.classList.remove('correct');
    natureInput.classList.remove('incorrect');

    knowMeResponse.textContent = '';
}