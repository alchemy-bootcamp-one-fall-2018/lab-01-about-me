/* eslint no-console:"off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElementInput = document.querySelectorAll('input[name="element"]:checked');
    console.log(selectedElementInput);
 
    for(var i = 0; i < selectedElementInput.length; i++) {
        var input = selectedElementInput[i];
        console.log(input.value);
        var tag = document.querySelectorAll(input.value);
        console.log(tag.length);
    }
}