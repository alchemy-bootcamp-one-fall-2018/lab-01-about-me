var correct = 0;
var numGuess = 3;

var feedbackQuiz = document.getElementById('feedbackQuiz');
var numberFeed = document.getElementById('numberFeed');

function aboutMe() {
    var el = event.target.elements;
    var alive = el.alive;
    var think = el.think;
    var like = document.querySelectorAll('input[name=like]:checked');
    var sleep = el.sleep;
    var ego = el.ego;

    if(alive.value.toLowerCase() === 'yes') {
        // alive.classList.add('green');
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
}


function guessNumber() {
    var el = event.target.elements;
    var number = el.number;
    var msg = '';

    numGuess--;

    if(numGuess >= 0) {
        if(number.value == '9') {
            msg = 'Correct!';
            number.disabled = true;
        } else {
            msg = 'Wrong! ' + numGuess + ' guesses left';
        }
    } else {
        msg = 'You lose. It was 9!';
    }
    numberFeed.textContent = msg;
}

function reset() {
    numGuess = 3;
    correct = 0;
    feedbackQuiz.textContent = '';
    numberFeed.textContent = '';
    console.log(numGuess, correct);
    console.log('reset');
}