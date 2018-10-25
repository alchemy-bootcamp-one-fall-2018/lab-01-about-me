/* exported checkAboutMe, resetAboutMe */

newFunction();

function newFunction() {
  var aboutMeForm = document.getElementById('about-me-form');
  var aboutMeResponse = document.getElementById('about-me-response');
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var catsInput = elements.cats;
    var boatsInput = elements.motorcycles;
    var motorcyclesInput = elements.motorcycles;
    var coffee = elements.coffee;
    var sharksInput = elements.sharks;

    catsInput.classList.remove('correct');
    catsInput.classList.remove('incorrect');
    boatsInput.classList.remove('correct');
    boatsInput.classList.remove('incorrect');
    motorcyclesInput.classList.remove('correct');
    motorcyclesInput.classList.remove('incorrect');
    coffeeInput.classList.remove('correct');
    coffeeInput.classList.remove('incorrect');
    sharksInput.classList.remove('correct');
    sharksInput.classList.remove('incorrect');
  }
 
 


