var aboutMeForm = document.getElementById('about-me-form')

    function checkAboutMe() {
        var elements = aboutMeForm.elements;

        var birthdayInput = elements.birthday;
        var sisBirthday = birthdayInput.value;

        var correct = 0;

        if(sisBirthday === "01/02/1993") {
            console.log('Here');
            correct += 1;
        }
    }