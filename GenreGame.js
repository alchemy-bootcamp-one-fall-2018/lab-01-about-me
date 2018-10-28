/* eslint no-console: "off" */
/*exported genreCheck, resetGenreCheck, guessForm*/

var genreResponse = document.getElementById('genre-response');

function genreCheck() {
    if(document.getElementById('scifi').checked === false) {
        console.log('you lose');
        genreResponse.textContent = 'try again!';
    } else {
        if(document.getElementById('scifi').checked === true) {
            console.log('you win');
        } 
    }
}

genreResponse.textContent = 'You win!';

function resetGenreCheck() {
    genreResponse.textContent = '';
}