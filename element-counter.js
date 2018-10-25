/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElementInput = document.querySelectorAll('input[name="element"]:checked');
    
    for(var i = 0; i < selectedElementInput.length; i++) {
        var input = selectedElementInput[i];
        console.log(input.value);
    }

    var p = document.querySelectorAll('p');

    for(var j = 0; j < p.length; j++) {
        console.log(p.length);
    }

    var div = document.querySelectorAll('div');

    for(var k = 0; k < div.length; k++) {
        console.log(div.length);
    }

    var h1 = document.querySelectorAll('h1');

    for(var q = 0; q < h1.length; q++) {
        console.log(h1.length);
    }

}
