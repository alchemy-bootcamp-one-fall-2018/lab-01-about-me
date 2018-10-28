/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';
//I'm still working on this code; it works but I want to more fully understand this, will resubmit
function tryQuerySelector() {
    var selectedElementInput = document.querySelectorAll('input[name="element"]:checked');
    console.log(selectedElementInput);

    for(var i = 0; i < selectedElementInput.length; i++) {
        var input = selectedElementInput[i];
        console.log(input.value);
        var tag = document.querySelectorAll(input.value);

        if(input.value === 'p') {
            document.getElementById('p-output').innerHTML = input.value + ' - ' + tag.length;
        }
        else if(input.value === 'section'){
            document.getElementById('section-output').innerHTML = input.value + ' - ' + tag.length;
        }
        else if(input.value === 'form'){
            document.getElementById('form-output').innerHTML = input.value + ' - ' + tag.length;
        }
        else if(input.value === 'input') {
            document.getElementById('input-output').innerHTML = input.value + ' -' + tag.length;
        }
    }
}



