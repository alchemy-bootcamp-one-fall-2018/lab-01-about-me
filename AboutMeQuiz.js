/* exported checkAboutMe, resetAboutMe */

var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {

    var elements = aboutMeForm.elements;

    var signInput = elements.sign;
    var sign = signInput.value;

    var happyInput = elements.happy;
    var happy = happyInput.value;
    
    var nightInput = elements.night;
    var night = nightInput.value;

    var tvInput = elements.tv;
    var tv = tvInput.value;

    var bornInput = elements.born;
    var born = bornInput.value;

    var correct = 0;

    if(sign.toLowerCase() === 'gemini') {
        correct = correct + 1;
        signInput.classList.add('correct');
        signInput.classList.remove('incorrect');
    }

    else if(sign !== '') {
        signInput.classList.add('incorrect');
        signInput.classList.remove('correct');
    }

    if(happy.toLowerCase() === 'animals') {
        correct = correct + 1;
        happyInput.classList.add('correct');
        happyInput.classList.remove('incorrect');
    }

    else if(happy !== '') {
        happyInput.classList.add('incorrect');
        happyInput.classList.remove('correct');
    }

    if(night.toLowerCase() === 'yes') {
        correct = correct + 1;
        nightInput.classList.add('correct');
        nightInput.classList.remove('incorrect');
    }

    else if(night !== '') {
        nightInput.classList.add('incorrect');
        nightInput.classList.remove('correct');
    }

    if(tv.toLowerCase() === 'classic') {
        correct = correct + 1;
        tvInput.classList.add('correct');
        tvInput.classList.remove('incorrect');
    }

    else if(tv !== '') {
        tvInput.classList.add('incorrect');
        tvInput.classList.remove('correct');
    }

    if(born === '1983') {
        correct = correct + 1;
        bornInput.classList.add('correct');
        bornInput.classList.remove('incorrect');
    }

    else if(born !== '') {
        bornInput.classList.add('incorrect');
        bornInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 5';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var signInput = elements.sign;
    var happyInput = elements.happy;
    var nightInput = elements.night;
    var tvInput = elements.tv;
    var bornInput = elements.born;

    signInput.classList.remove('correct');
    signInput.classList.add('correct');
    happyInput.classList.remove('correct');
    happyInput.classList.add('correct');
    nightInput.classList.remove('correct');
    nightInput.classList.add('correct');
    tvInput.classList.remove('correct');
    tvInput.classList.add('correct');
    bornInput.classList.remove('correct');
    bornInput.classList.add('correct');

    aboutMeResponse.textContent = '';
}
