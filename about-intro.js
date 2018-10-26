/* exported checkHowWell */

var aboutMeForm = document.getElementById('how-well');
//var aboutMeResponse = document.getElementById('how-well-response');

function checkHowWell() {

    var elements = aboutMeForm.elements;

    var latinInput = elements.latin;
    var speakLatin = latinInput.value;

    var colorInput = elements.colors;
    var favColor = colorInput.value;

    var bookInput = elements.book;
    var favBook = bookInput.value;

    var runInput = elements.run;
    var runSpeed = runInput.value;

    var helpInput = elements.help;
    var howHelp = helpInput.value;

   
   // eslint-disable-next-line
    var correct = 0;

    if(speakLatin.toLowerCase() === 'yes') {
        correct++;
        alert('of course! Intro_Mode speaks all 6,500 human languages');
        
    }
    if(favColor === 'blue') {
        correct++;
        alert('correct!');
    }
    if(favBook === 'robot') {
        correct++;
        alert('I,Robot, of course!');
    }
    if(runSpeed === '4') {
        correct++;
        alert('Metal legs are heavy. Though my human version can run it in just under 6 minutes!');
    }
    if(howHelp === 'robot'){
        correct++;
        alert('depends on the day');
    }
}

