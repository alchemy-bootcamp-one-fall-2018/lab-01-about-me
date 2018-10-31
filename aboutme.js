/* exported checkAboutMe, resetAboutMe */
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var pizzaInput = elements.pizza;
    var likePizza = pizzaInput.value;

    var pieInput = elements.pie;
    var likePie = pieInput.value;

    var bandInput = elements.band;
    var favBand = bandInput.value;

    var artInput = elements.art;
    var likeArt = artInput.value;

    var musicInput = elements.music;
    var likeMusic = musicInput.value;

    var correct = 0;
    var incorrect = 0;

    if(likePizza.toLowerCase() === 'yes') {
        // run this code if they type yes to pizza
        correct = correct + 1;
        pizzaInput.classList.add('correct');
        pizzaInput.classList.remove('incorrect');
    }
    else if(likePizza !== '') {
        // run this code if they type anything other than yes to pizza
        incorrect += 1;
        pizzaInput.classList.add('incorrect');
        pizzaInput.classList.remove('correct');
    }
    
    if(likePie.toLowerCase() === 'yes') {
        // run this code if they type yes to pie
        correct = correct + 1;
        pieInput.classList.add('correct');
        pieInput.classList.remove('incorrect');
    } 
    else if(likePie !== '') {
        // run this code if they type anything other than yes to pie        
        incorrect += 1;
        pieInput.classList.add('incorrect');
        pieInput.classList.remove('correct');
    }

    if(favBand.toLowerCase() === 'beatles') {
        // run this code if they type Beatles or beatles
        correct = correct + 1;
        bandInput.classList.add('correct');
        bandInput.classList.remove('incorrect');
    } 
    else if(favBand !== '') {
        // run this code if they type anything other than Beatles or beatles
        incorrect += 1;
        bandInput.classList.add('incorrect');
        bandInput.classList.remove('correct');
    }

    if(likeArt.toLowerCase() === 'true') {
        // run this code if they type true
        correct = correct + 1;
        artInput.classList.add('correct');
        artInput.classList.remove('incorrect');
    }
    else if(likeArt !== '') {
        // run this code if they type anything other than true        
        incorrect += 1;
        artInput.classList.add('incorrect');
        artInput.classList.remove('correct');
    }

    if(likeMusic.toLowerCase() === 'yes') {
        // run this code if they type yes to music
        correct = correct + 1;
        musicInput.classList.add('correct');
        musicInput.classList.remove('incorrect');
    } 
    else if(likeMusic !== '') {
        // run this code if they type anything other than yes to music       
        incorrect += 1;
        musicInput.classList.add('incorrect');
        musicInput.classList.remove('correct');
    }
    aboutMeResponse.textContent = '' + correct + ' out of 5, you missed ' + incorrect;

}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var pizzaInput = elements.pizza;
    var pieInput = elements.pie;
    var bandInput = elements.band;
    var artInput = elements.art;
    var musicInput = elements.music;

    pizzaInput.classList.remove('correct');
    pizzaInput.classList.remove('incorrect');
    pieInput.classList.remove('correct');
    pieInput.classList.remove('incorrect');
    bandInput.classList.remove('correct');
    bandInput.classList.remove('incorrect');
    artInput.classList.remove('correct');
    artInput.classList.remove('incorrect');
    musicInput.classList.remove('correct');
    musicInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';
}