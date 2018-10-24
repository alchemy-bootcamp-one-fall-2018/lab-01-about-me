/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

// eslint-disable-next-line


function tryQuerySelector() {
    
    var elementCounterResponse = document.getElementById('element-counter-response');
    var selectedTagInputs = document.querySelectorAll('input[name="tag"]:checked');

    for(var i = 0; i < selectedTagInputs.length; i++) {
        var input = document.querySelectorAll(selectedTagInputs[i].value);
        console.log(selectedTagInputs[i].id, input.length);
        elementCounterResponse.textContent = 'Element  ' + selectedTagInputs[i].id + ' is used ' + input.length + ' times.' ;
    }

    // if(selectedTagInput) {
    //     console.log(selectedTagInput.value, selectedTagInput.length);
    // }
    // else {
    //     console.log('no tag selected');
    // }

   
}