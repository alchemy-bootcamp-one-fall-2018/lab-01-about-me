var petsForm = document.getElementById('pets');

function checkPets() {
    
    var elements = petsForm.elements;

    var maxInput = elements.max;
    var max = maxInput.value;
    console.log('maxs value', max);
    var atsInput = elements.ats;
    var ats = atsInput.value;
    var allergicInput = elements.allergicInput;
    var allergic = allergicInput.value;

    var correct = 0;

    if(max === 'Joe') {
        correct = correct + 1;
        maxInput.classlist.add('correct');
        maxInput.classlist.remove('incorrect');
    }

    else if(max === 'Schuyler'){
        // want to count incorrect, flash Harold pic & reply'Please don't tell Schuyler'
        // if Zoe or Cindy want to count incorrect, reply 'Aw, rats!' and flash Remy and Maude pics
    }

    if(ats === 'Rats') {
        correct = correct + 1;
        atsInput.classlist.add('correct');
        atsInput.classlist.remove('incorrect');
    }
    else if(ats === 'Cats'){
        //want to count incorrect and reply 'SO murdery' with cat pic
    }

    if(allergic === 'Dogs') {
        correct = correct + 1;
        atsInput.classlist.add('correct');
        atsInput.classlist.remove('incorrect');
        //want to add pic with correct answer
        //want to count incorrect and reply'SO allergic' with bitcoin cat pic
        //else if(allergic === 'Cats'){
    }

    else if(allergic === 'Rats'){
        //want to count incorrect and reply with a frown face emoji and pic
    }
    }