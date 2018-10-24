/* eslint no-console: "off" */
/* exported tryQuerySelector*/

function tryQuerySelector() {
    var elementInputs = document.querySelectorAll('input[name="element"]');
    
    for(var i = 0; i < elementInputs.lenth; i++) {
        var input = elementInputs[i];
        console.log(input.value, input.id, input.checked);
    }

    var elementInput = document.querySelectorAll('input[name="element"]');

    if(selectedElementInput) {
        
    }
}
