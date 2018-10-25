var gameTwoForm = document.getElementById('game-two-form');
var gameTwoResponse = document.getElementById('game-two-response');

function checkGameTwo () {

    var elements = gameTwoForm.elements;

    var gearInput = element.gear;
    var gearPref = gearInput.value;

    var correct = 0;


    if(gearPref === 'Nike') {
        correct = correct + 1;
        gearInput.classList.add('correct');
        gearInput.classList.remove('incorrect');

    }else if(gearPref !== 'Nike'){
        gearInput.classList.add('incorrect');
        gearInput.classList.remove('correct');
    }

    gameTwoResponse.textContent = 'You got ' + correct + ' /5 right!';
}
