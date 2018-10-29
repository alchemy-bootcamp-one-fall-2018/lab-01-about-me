/* exported clickedButton*/ 
var elementCounterResponse = document.getElementById('response');
function clickedButton() {
    var tagsChosen = document.querySelectorAll('input[name="element-button"]:checked');    
    var printThis = '';
    
    elementCounterResponse.textContent = '';

    for(var i = 0; i < tagsChosen.length; i++) {
        var tagCount = tagsChosen[i];
        var divList = document.querySelectorAll(tagCount.value);
        var numberDivs = divList.length;
        var finalAnswer = (tagCount.value + '--' + numberDivs);
        printThis = printThis + ' ' + finalAnswer;
        
    }
    elementCounterResponse.textContent = printThis;
}

//MODIFIED FOR INJOONG