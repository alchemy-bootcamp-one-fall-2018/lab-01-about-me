var aboutMeForm = document.getElementById('about-me-form')
var aboutMeResponse = document.getElementById('about-me-response');

    function checkAboutMe() {
        var elements = aboutMeForm.elements;

        var birthdayInput = elements.birthday;
        var sisBirthday = birthdayInput.value;

        var correct = 0;

        if (sisBirthday === "02/10/1994") {
            console.log('Correct');
            correct += 1;
            birthdayInput.classList.add('correct');
            birthdayInput.classList.remove('incorrect');
        } else if (sisBirthday !== "02/10/1994") {
            console.log('Incorrect');
            birthdayInput.classList.add('incorrect');
            birthdayInput.classList.remove('correct');
        }
        

        var favNumberInput = elements.favNumber;
        var favoriteNumber = favNumberInput.value;

        if (favoriteNumber === "15") {
            console.log('Correct');
            correct += 1;
            favNumberInput.classList.add('correct');
            favNumberInput.classList.remove('incorrect');
        } else if (favoriteNumber !== "15") {
            console.log('Incorrect')
            favNumberInput.classList.add('incorrect');
            favNumberInput.classList.remove('correct');
        }


        var physDegreeInput = elements.degree;
        var physicsDegree = physDegreeInput.value;

        if (physicsDegree === "No") {
            console.log('Correct');
            correct += 1;
            physDegreeInput.classList.add('correct');
            physDegreeInput.classList.remove('incorrect');
        } else if (physicsDegree !== "No") {
            console.log('Incorrect');
            physDegreeInput.classList.add('incorrect');
            physDegreeInput.classList.remove('correct');
        }
        
        
        var switchMajInput = elements.switch;
        var switchMajor = switchMajInput.value;

        if (switchMajor === "2") {
            console.log('Correct');
            correct += 1;
            switchMajInput.classList.add('correct');
            switchMajInput.classList.remove('incorrect');
        } else if (switchMajor !== "2") {
            console.log('Incorrect');
            switchMajInput.classList.add('incorrect');
            switchMajInput.classList.remove('correct');
        }
        
        
        var likeMathInput = elements.mathematics;
        var likeMath = likeMathInput.value;

        if (likeMath === "Yes") {
            console.log('Correct');
            correct += 1;
            likeMathInput.classList.add('correct');
            likeMathInput.classList.remove('incorrect');
        } else if (likeMath !== "Yes") {
            console.log('Incorrect');
            likeMathInput.classList.add('incorrect');
            likeMathInput.classList.remove('correct')
        }
        
        aboutMeResponse.textContent = 'You got ' + correct + ' out of 5!';

    }

    function resetAboutMe() {
        var elements = aboutMeForm.elements;
        var birthdayInput = elements.birthday;
        var favNumberInput = elements.favNumber;
        var physDegreeInput = elements.degree;
        var switchMajInput = elements.switch;
        var likeMathInput = elements.mathematics;
        
        birthdayInput.classList.remove('correct');
        birthdayInput.classList.remove('incorrect');
        favNumberInput.classList.remove('correct');
        favNumberInput.classList.remove('incorrect');
        physDegreeInput.classList.remove('correct');
        physDegreeInput.classList.remove('incorrect');
        switchMajInput.classList.remove('correct');
        switchMajInput.classList.remove('incorrect');
        likeMathInput.classList.remove('correct');
        likeMathInput.classList.remove('incorrect');

        aboutMeResponse.textContent = '';
    }