var aboutMeForm = document.getElementById('about-me-form');

var aboutMeAnswer = document.getElementById("about-me-answer");

function checkAnswers() {
    var elements = aboutMeForm.elements;

    var foodInput = elements.food;
    var foodAnswer = foodInput.value;

    var correct = 0;

    if (foodAnswer.toLowerCase() === 'moroccan') {
        correct = correct + 1;
        foodInput.classList.add("correct");
        foodInput.classList.remove("incorrect");
    } else {
        foodInput.classList.add("incorrect");
        foodInput.classList.remove("correct");
    }

    var sportInput = elements.sport;
    var sportAnswer = sportInput.value;

    if (sportAnswer.toLowerCase() === 'football') {
        correct = correct + 1;
        sportInput.classList.add("correct");
        sportInput.classList.remove("incorrect");
    } else {
        sportInput.classList.add("incorrect");
        sportInput.classList.remove("correct");
    }

    var jobInput = elements.job;
    var jobAnswer = jobInput.value;

    if (jobAnswer.toLowerCase() === 'massage therapist') {
        correct = correct + 1;
        jobInput.classList.add("correct");
        jobInput.classList.remove("incorrect");
    } else {
        jobInput.classList.add("incorrect");
        jobInput.classList.remove("correct");
    }

    var countriesInput = elements.countries;
    var countriesAnswer = countriesInput.value;

    if (countriesAnswer == 58) {
        correct = correct + 1;
        countriesInput.classList.add("correct");
        countriesInput.classList.remove("incorrect");
    } else {
        countriesInput.classList.add("incorrect");
        countriesInput.classList.remove("correct");
    }

    var yearsInput = elements.years;
    var yearsAnswer = yearsInput.value;

    if (yearsAnswer == 13) {
        correct = correct + 1;
        yearsInput.classList.add("correct");
        yearsInput.classList.remove("incorrect");
    } else {
        yearsInput.classList.add("incorrect");
        yearsInput.classList.remove("correct");
    }



    aboutMeAnswer.textContent = 'You got ' + correct + ' out of 5.';
}

function resetAnswers() {
    var elements = aboutMeForm.elements;
    var sportInput = elements.sport;
    var foodInput = elements.food;
    var jobInput = elements.job;
    var countriesInput = elements.countries;
    var yearsInput = elements.years;

    sportInput.classList.remove('correct');
    sportInput.classList.remove('incorrect');
    foodInput.classList.remove('correct');
    foodInput.classList.remove('incorrect');
    jobInput.classList.remove('correct');
    jobInput.classList.remove('incorrect');
    countriesInput.classList.remove('correct');
    countriesInput.classList.remove('incorrect');
    yearsInput.classList.remove('correct');
    yearsInput.classList.remove('incorrect');

    aboutMeAnswer.textContent = '';


}