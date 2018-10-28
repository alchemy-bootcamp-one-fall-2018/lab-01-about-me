/* eslint no-console: "off" */
/*exported genreCheck, resetGenreCheck, guessForm*/

//var genreForm = document.getElementById('genre').checked; 

var genreResponse = document.getElementById('genre-response');


function genreCheck() {
    if(document.getElementById('scifi').checked === false) {
        console.log('you lose');
        resetGenreCheck();
    } else {
        if(document.getElementById('scifi').checked === true) {
            console.log('you win');
        } 
    }
}


//genreResponse.textContent = 'You scored ' + score + ' percent!';
function resetGenreCheck() {
    genreResponse.textContent = 'bummer';
}