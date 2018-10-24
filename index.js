var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    
    var elements = aboutMeForm.elements;
    
    var hometownInput = elements.hometown;
    var myHometown = hometownInput.value;
    
    var correct = 0;
    
    if(myHometown === 'New York') {
        correct = correct + 1;
        hometownInput.classList.add('correct');
        hometownInput.classList.remove('incorrect');
    }
    else if(myHometown !== '') {
        hometownInput.classList.add('incorrect');
        hometownInput.classList.remove('correct');
    }
    
    var dogInput = elements.dog;
    var favDog = dogInput.value;
    
    if(favDog.toLowerCase() === 'pug') {
        correct = correct + 1;
        dogInput.classList.add('correct');
        dogInput.classList.remove('incorrect');
        
    }
    else if(favDog !== ''){
        dogInput.classList.add('incorrect');
        dogInput.classList.remove('correct');
        
    }
    
    var numberInput = elements.number;
    var favNumber = numberInput.value;
    
    if(favNumber === '17'){
        correct = correct + 1;
        numberInput.classList.add('correct');
        numberInput.classList.remove('incorrect');
        
    }
    else if(favNumber !== ''){
        numberInput.classList.add('incorrect');
        numberInput.classList.remove('correct');
        
    }
    
    var breakfastInput = elements.breakfast;
    var favBreakfast = breakfastInput.value;
    
    if(favBreakfast.toLowerCase() === 'muffins'){
        correct = correct + 1;
        breakfastInput.classList.add('correct');
        breakfastInput.classList.remove('incorrect');
        
    }
    else if(favBreakfast !== ''){
        breakfastInput.classList.add('incorrect');
        breakfastInput.classList.remove('correct');
    } 
    
    var twitterInput = elements.twitter;
    var twitterHandle = twitterInput.value;
    
    if(twitterHandle === 'paigeegorry'){
        correct = correct + 1;
        twitterInput.classList.add('correct');
        twitterInput.classList.remove('incorrect');
    }
    
    aboutMeResponse.textContent = 'You got ' + correct + ' out of 5 correct';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var hometownInput = elements.hometown;
    var dogInput = elements.dog;
    var numberInput = elements.number;
    var breakfastInput = elements.breakfast;
    var twitterInput = elements.twitter;
    
    hometownInput.classList.remove('correct');
    hometownInput.classList.remove('incorrect');
    dogInput.classList.remove('correct');
    dogInput.classList.remove('incorrect');
    numberInput.classList.remove('correct');
    numberInput.classList.remove('incorrect');
    breakfastInput.classList.remove('correct');
    breakfastInput.classList.remove('incorrect');
    twitterInput.classList.remove('correct');
    twitterInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';
}