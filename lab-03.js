/* exported whenClicked */ 

var inputValue = document.getElementById('inputEl');





function whenClicked() {
    var elementInput = document.querySelectorAll('input[name="element"]:checked');
    var result = '';
    for(var i = 0; i < elementInput.length; i++) {

        var elementIndex = elementInput[i]; 
        var elementList = (document.querySelectorAll(elementIndex.value));
        var numberofEls = elementList.length; 

        result += elementIndex.value + ' ' + numberofEls + '<br>';

        var printOutput =document.getElementById('inputEl');
        printOutput.innerHTML = result;

        /*if(elementIndex.value === 'p') {
            paraValue.textContent = elementIndex.value + '-' + numberofEls;
        }
        if(elementInput[i] === 'div') {
            divValue.textContent = elementIndex.value + '-' + numberofEls;
        }
        if(elementInput[i] === 'input') {
            inputValue.textContent = elementIndex.value + '-' + numberofEls;
        }*/


        
    }
}







