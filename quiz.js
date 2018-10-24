'use strict';

/* exported aboutMe, resetQuiz */

var correct = 0;
var feedbackQuiz = document.getElementById('feedbackQuiz');

function aboutMe() {
    var el = event.target.elements;
    var alive = el.alive;
    var think = el.think;
    var like = document.querySelectorAll('input[name=like]:checked');
    var sleep = el.sleep;
    var ego = el.ego;

    if(alive.value.toLowerCase() === 'yes') {
        correct++;
        alive.classList.add('green');
    }

    if(think.value === 'lot') {
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

function resetQuiz() {
    var el = event.target.elements;

    correct = 0;
    feedbackQuiz.textContent = '';
    el.alive.classList.remove('green');
    el.alive.classList.remove('red');
    el.submit.disabled = false;
}