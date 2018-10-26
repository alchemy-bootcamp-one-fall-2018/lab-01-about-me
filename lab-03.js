/* exported whenClicked */ 

function whenClicked() {
    var elementInput = document.querySelectorAll('input[name="element"]:checked');
    var result = '';
    for(var i = 0; i < elementInput.length; i++) {

        var elementIndex = elementInput[i]; 
        var elementList = (document.querySelectorAll(elementIndex.value));
        var elementNumber = elementList.length; 

        result += elementIndex.value + ' ' + elementNumber + '<br>';

        var printOutput = document.getElementById('inputEl');
        printOutput.innerHTML = result;




        
    }
}







