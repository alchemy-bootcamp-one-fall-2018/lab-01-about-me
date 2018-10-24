var hiForm = document.getElementById('hi');

function checkHi() {

    var elements = hiForm.elements;

    var alreadyBeenInput = elements.alreadyBeen;
    var alreadyBeen = alreadyBeenInput.value;

    var goInput = elements.goInput;
    var go = goInput.value;

    var correct = 0;

    if(alreadyBeen === 'yes') {
        correct = correct + 1;
        alreadyBeenInput.classlist.add('correct');
        // there isn't an incorrect answer. Do I still add the remove line?
    }

    if(go === 'yes') {
        correct = correct +1;
        goInput.classlist.add('correct');
        goInput.classlist.remove('incorrect');

    
        //want to count intcorrect and reply 1st 'Did you mean yes?', 2nd 'I'll think of you from the beach'
        //else if(go === 'no'){
    }
}