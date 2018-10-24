/* eslint no-console:"off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var elementInputs = document.querySelectorAll('input[name="element"]');

    for(var i = 0; i < elementInputs.length; i++) {
        var input = elementInputs[i];
        console.log(input.value, input.id, input.checked);
    }
}