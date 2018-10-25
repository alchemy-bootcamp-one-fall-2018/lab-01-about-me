var elementCounterResponse = document.getElementById('element-counter-response');
var elementCounterResponseP = document.getElementById('element-counter-response-p');
var elementCounterResponseInput = document.getElementById('element-counter-response-input');


function clickedButton() {
    var tagsChosen = document.querySelectorAll('input[name="element-button"]:checked');    
    
    elementCounterResponse.textContent = '';
    elementCounterResponseP.textContent = '';
    elementCounterResponseInput.textContent = '';

    for(var i = 0; i < tagsChosen.length; i++) {
        var tagCount = tagsChosen[i];
        var divList = document.querySelectorAll(tagCount.value);
        var numberDivs = divList.length;
        var finalAnswer = (tagCount.value + '--' + numberDivs);
       
        if(tagCount.value === 'div') {
            elementCounterResponse.textContent = finalAnswer;
        }
        if(tagCount.value === 'p') {
            elementCounterResponseP.textContent = finalAnswer;
        }
        if(tagCount.value === 'input') {
            elementCounterResponseInput.textContent = finalAnswer;
        }
        
    }
}
