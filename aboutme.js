/* exported checkAboutMe, resetAboutMe */

var aboutMeForm = document.getElementById("about-me-form");
var aboutMeResponse = document.getElementById("about-me-response");

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var pizzaInput = elements.pizza;
    var likePizza = pizzaInput.value;

    var correct = 0;
console.log('got-here')
    if(likePizza.toLowerCase() === 'yes') {
        // let's run this code if i like pizza
        correct = correct + 1;
        pizzaInput.classList.add('correct');
        pizzaInput.classList.remove('incorrect');
    }
    else if(likePizza !== '') {
        pizzaInput.classList.add('incorrect');
    }
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var pizzaInput = elements.pizza;
    var likePizza = pizzaInput.value;

    pizzaInput.classList.remove("correct");
    pizzaInput.classList.remove("incorrect");

    aboutMeResponse.textContent ="";
}