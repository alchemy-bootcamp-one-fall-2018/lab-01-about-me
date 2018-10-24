var gameOneForm = document.getElementById('game-one-form');
var gameOneResponse = document.getElementById('game-one-response');

function checkGameOne () {

    var elements = gameOneForm.elements;

    var nameInput = elements.name;
    var correctName = nameInput.value;

    var birthdayInput = elements.birthday;
    var birthdayMonth = birthdayInput.value;

    var correct= 0;

    
    if(correctName === 'Teonna'){
         correct = correct + 1;
         nameInput.classList.add('correct');
         nameInput.classList.remove('incorrect');
         
    } else if(nameInput !== 'Teonna') {
        nameInput.classList.add('incorrect');
        nameInput.classList.remove('correct');
    
    }
    
    if(birthdayMonth === 'October') {
        correct = correct +1;
        birthdayInput.classList.add('correct');
        birthdayInput.classList.remove('incorrect');

    } else if(birthdayInput !== 'October') {
        birthdayInput.classList.add('incorrect');
        birthdayInput.classList.remove('correct');
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

