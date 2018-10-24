var aboutMeForm = document.getElementById('how-well');
var aboutMeResponse = document.getElementById('how-well-response');

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

   

    var correct = 0;

    if (speakLatin.toLowerCase() === 'no') {
        correct++;
        aboutMeResponse.textContent = 'tester';
        
    }
    if(favColor === 'blue') {
        correct++;
    }
    if(favBook === 'robot') {
        correct++;
    }
    if(runSpeed === '4') {
        correct++
    }
    if(howHelp === 'robot'){
        correct++
    }
}