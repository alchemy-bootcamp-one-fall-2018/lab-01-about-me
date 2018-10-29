/* eslint no-console: "off" */
/* exported tryQuerySelector, clearCount */
'use strict';

// eslint-disable-next-line


function tryQuerySelector() {
    
    var elementCounterResponse = document.getElementById('element-counter-response');
    var selectedTagInputs = document.querySelectorAll('input[name="tag"]:checked');

    if(selectedTagInputs.length > 0) {
        for(var i = 0; i < selectedTagInputs.length; i++) {
            var input = document.querySelectorAll(selectedTagInputs[i].value);
            elementCounterResponse.textContent = elementCounterResponse.textContent + 'Element  ' + selectedTagInputs[i].id + ' used ' + input.length + ' times \r\n' ;
        }
    }
    else {
        elementCounterResponse.textContent = 'No tag selected';
    }
   
}

function clearCount(){
    window.location.reload();
}