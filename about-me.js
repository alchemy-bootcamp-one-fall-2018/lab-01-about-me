/* exported checkAboutMe, resetAboutMe */

var aboutMe = document.getElementById('about-me');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {

    var elements = aboutMe.elements;

    var countryInput = elements.country;
    var birthCountry = countryInput.value;

    var sistersInput = elements.sisters;
    var numSisters = sistersInput.value;

    var dessertInput = elements.dessert;
    var faveDessert = dessertInput.value;

    var fearInput = elements.fear;
    var biggestFear = fearInput.value;

    var noodlesInput = elements.noodles;
    var faveNoodles = noodlesInput.value;

    var correct = 0;

    if(birthCountry.toLowerCase() === 'singapore') {
        correct = correct + 1;
        countryInput.classList.add('correct');
        countryInput.classList.remove('incorrect');
    }
    else if(birthCountry.toLowerCase !== '') {
        countryInput.classList.add('incorrect');
        countryInput.classList.remove('correct');
    }
    

    if(numSisters === '4') {
        correct = correct + 1;
        sistersInput.classList.add('correct');
        sistersInput.classList.remove('incorrect');
    } 
    else if(numSisters !== '') {
        sistersInput.classList.add('incorrect');
        sistersInput.classList.remove('correct');
    }

    if(faveDessert.toLowerCase() === 'cake') {
        correct = correct + 1;
        dessertInput.classList.add('correct');
        dessertInput.classList.remove('incorrect');
    }
    else if(faveDessert !== '') {
        dessertInput.classList.add('incorrect');
        dessertInput.classList.remove('correct');
    }
    
    if(biggestFear === 'heights') {
        correct = correct + 1;
        fearInput.classList.add('correct');
        fearInput.classList.remove('incorrect');
    } 
    else if(biggestFear !== '') {
        fearInput.classList.add('incorrect');
        fearInput.classList.remove('correct');
    }

    if(faveNoodles === 'yes') {
        correct = correct + 1;
        noodlesInput.classList.add('correct');
        noodlesInput.classList.remove('incorrect');
    } 
    else if(faveNoodles !== '') {
        noodlesInput.classList.add('incorrect');
        noodlesInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 5';

    function resetAboutMe() {
        var elements = aboutMe.elements;
        var countryInput = elements.country;
        var sistersInput = elements.sisters;
        var dessertInput = elements.dessert;
        var fearInput = elements.fear;
        var noodlesInput = elements.noodles;


    
        countryInput.classList.remove('correct');
        sistersInput.classList.remove('incorrect');
        dessertInput.classList.remove('correct');
        fearInput.classList.remove('incorrect');
        noodlesInput.classList.remove('correct');
    
        aboutMeResponse.textContent = '';
    
    }
}









