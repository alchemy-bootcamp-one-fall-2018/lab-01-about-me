/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElements = document.querySelectorAll('input[name="elements"]:checked');
    console.log(selectedElements);
    for(var i = 0; i < selectedElements.length; i++) {
        var input = selectedElements[i];
        console.log(input.value);
    
        var elementCount = document.querySelectorAll('input.value');
        console.log(elementCount.length);
    }
}


// var p = document.querySelectorAll('p');
// console.log(p.length);