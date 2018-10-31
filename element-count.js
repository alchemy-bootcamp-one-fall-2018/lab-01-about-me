/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElements = document.querySelectorAll('input[name="elements"]:checked');
    var results = document.getElementById('results');

    for(var i = 0; i < selectedElements.length; i++) {
        var input = selectedElements[i].value;
        console.log('input', input);
        var elementCount = document.querySelectorAll(input).length;
        console.log('element count', elementCount);
        results.textContent += 'you have selected ' + input + ' ' + elementCount + ' ' + 'times' + ' ' ;
    }
}
