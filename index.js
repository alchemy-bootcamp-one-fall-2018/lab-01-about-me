var correct = 0;

function aboutMe() {
    var el = event.target.elements;
    var alive = el.alive;
    var think = el.think;
    var like = document.querySelectorAll('input[name=like]:checked');
    var sleep = el.sleep;
    var ego = el.ego;

    var feedback = document.getElementById('feedback');


    if(alive.value.toLowerCase() === 'yes'){
        // alive.classList.add('green');
        correct++;
    }

    if(think.value === 'lot'){
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

    feedback.textContent = 'You got ' + correct + ' /6 correct';
}


function guessNumber() {
    var el = event.target.elements;
    var number = el.number;

    var numberFeed = document.getElementById('numberFeed');
    var msg = '';
    var j = 3;

    while(j > 0 && msg !== 'Correct!') {
        if(number == '9') {
            msg = 'Correct!';
        } else {
            j--;
            msg = 'Wrong! ' + j + ' guesses left';
        }

        numberFeed.textContent = msg;
    }
    
}