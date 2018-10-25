var elementCounterResponse = document.getElementById('element-counter-response');


function clickedButton() {
    var tagsChosen = document.querySelectorAll('input[name="element-button"]:checked');    
    
    for (var i = 0; i < tagsChosen.length; i++) {
        var tagCount = tagsChosen[i];
        var divList = document.querySelectorAll(tagCount.value);
        var numberDivs = divList.length;

        var finalAnswer = (tagCount.value + '--' + numberDivs)
        console.log(finalAnswer);
        elementCounterResponse.textContent = finalAnswer;
    }
}
