var correct = 0;
var numGuess = 2;

var feedbackQuiz = document.getElementById('feedbackQuiz');
var numberFeed = document.getElementById('numberFeed');

function aboutMe() {
    var el = event.target.elements;
    var alive = el.alive;
    var think = el.think;
    var like = document.querySelectorAll('input[name=like]:checked');
    var sleep = el.sleep;
    var ego = el.ego;

    alive.classList.add('green');

    if(alive.value.toLowerCase() === 'yes') {
        //alive.classList.add('green');
        correct++;
    }

    if(think.value === 'lot') {
        //corr(think);
        correct++;
    }

    for(var i = 0; i < like.length; i++) {

        if(like[i].value === 'some' || like[i].value === 'doing') {
            correct++;
        }
    }

    if(sleep.value.toLowerCase() === 'every night') {
        correct++;
    }

    if(ego.value.toLowerCase() === 'no') {
        correct++;
    }

    feedbackQuiz.textContent = 'You got ' + correct + ' /6 correct';

    el.submit.disabled = true;
}


function guessNumber() {
    var el = event.target.elements;
    var number = el.number;
    var msg = '';

    if(numGuess > 0) {
        if(number.value == '9') {
            msg = 'Correct!';
            number.classList.add('green');
            number.disabled = true;
            el.guess.disabled = true;
        } else {
            msg = 'Wrong! ' + numGuess + ' guesses left';
            number.classList.add('red');
        }
    } else {
        msg = 'You lose. It was 9!';
        number.disabled = true;
        el.guess.disabled = true;
    }
    numberFeed.textContent = msg;
    numGuess--;
}

function resetQuiz() {
    var el = event.target.elements;

    correct = 0;
    feedbackQuiz.textContent = '';
    el.alive.classList.remove('green');
    el.alive.classList.remove('red');
    el.submit.disabled = false;
}

function resetNumGame() {
    var el = event.target.elements;

    numGuess = 3;
    numberFeed.textContent = '';
    el.number.disabled = false;
    el.guess.disabled = false;
    el.number.classList.remove('green');
    el.number.classList.remove('red');
}