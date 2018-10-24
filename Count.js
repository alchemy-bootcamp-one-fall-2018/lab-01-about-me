/* eslint no-console:"off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var elementInputs = document.querySelectorAll('input[name="element"]');

    for(var i = 0; i < elementInputs.length; i++) {
        var input = elementInputs[i];
        console.log(input.value, input.checked);
    }

    var section = document.querySelectorAll('section');

    for(var j = 0; j < section.length; j++) {
        console.log(section.length);
    }

    var form = document.querySelectorAll('form');

    for(var k = 0; k < form.length; k++) {
        console.log(form.length);
    }

    var div = document.querySelectorAll('div');

    for(var l = 0; l < div.length; l++) {
        console.log(div.length);
    }
}