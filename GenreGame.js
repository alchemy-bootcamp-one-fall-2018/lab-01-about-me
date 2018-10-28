/* eslint no-console: "off" */
/*exported genreCheck, resetGenreCheck, guessForm*/

//var genreForm = document.getElementById('genre').checked; 

var genreResponse = document.getElementById('genre-response');

var wrong = 0;

function genreCheck() {
    if(document.getElementById('litfic').checked === true) {
        console.log('you win');
    } else {
        console.log('try again');
    }



  /*  if(chocMelt === 'tongue'){
        wrong++;
    }   
    if(favPet === 'dog'){
        wrong++;
    }
    if(favFiber === 'yarn'){
        wrong++;
    }
    if(likeGame === 'puzzle') {
        wrong++;
    }
    if(kindaJunkie === 'books') {
        wrong++;
    }
    */
    var score = (wrong / 5) * 100;
    genreResponse.textContent = 'You scored ' + score + ' percent!';
    wrong = 0;
}