/* exported exported checkAboutMe, resetAboutMe **/

var gameOneForm = document.getElementById('game-one-form');
var gameOneResponse = document.getElementById('game-one-response');

function checkGameOne () {

    var elements = gameOneForm.elements;

    var nameInput = elements.name;
    var correctName = nameInput.value;

    var birthdayInput = elements.birthday;
    var birthdayAge = birthdayInput.value;

    var colorInput = elements.color;
    var colorPurple = colorInput.value.toLowerCase();

    var numberInput = elements.number;
    var number27 = numberInput.value;

    var dogsInput = elements.dogs;
    var likeDogs = dogsInput.value.toLowerCase();

    var correct= 0;

    
    if(correctName === 'Teonna'){
         correct = correct + 1;
         nameInput.classList.add('correct');
         nameInput.classList.remove('incorrect');
         
    } else if(nameInput !== 'Teonna') {
        nameInput.classList.add('incorrect');
        nameInput.classList.remove('correct');

    }
    
    if(birthdayAge === '31') {
        correct = correct + 1;
        birthdayInput.classList.add('correct');
        birthdayInput.classList.remove('incorrect');

    } else if(birthdayInput !== '31') {
        birthdayInput.classList.add('incorrect');
        birthdayInput.classList.remove('correct');

    }    

    if(colorPurple.toLowerCase() === 'yes') {
        correct = correct + 1;
        colorInput.classList.add('correct'); 
        colorInput.classList.remove('incorrect');
    
    }else if(colorPurple !== 'yes') {
        colorInput.classList.add('incorrect');
        colorInput.classList.remove('correct');

    }

    if(number27 === '27'){
        correct = correct + 1;
        numberInput.classList.add('correct')
        numberInput.classList.remove('incorrect');

    }else if(number27 !== '27'){
        numberInput.classList.add('incorrect');
        numberInput.classList.remove('correct');
    }

    if(likeDogs.toLowerCase() === 'yes'){
        correct = correct + 1;
        dogsInput.classList.add('correct');
        dogsInput.classList.remove('incorrect');

    }else if(likeDogs !== 'yes'){
        dogsInput.classList.add('incorrect');
        dogsInput.classList.remove('correct');
    }

    gameOneResponse.textContent = 'You got ' +  correct + ' right!';
}

function resetGameOne(){
    var elements = gameOneForm.elements;
    var nameInput = elements.name;
    var birthdayInput = elements.birthday;

    nameInput.classList.remove('correct');
    nameInput.classList.remove('incorrect');
    birthdayInput.classList.remove('correct');
    birthdayInput.classList.remove('incorrect');

    gameOneResponse.textContent = '';
}

