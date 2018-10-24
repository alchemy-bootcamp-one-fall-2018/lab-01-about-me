/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElements = document.querySelectorAll('input[name="elements"]:checked');
    //console.log(input.value);
    for(var i = 0; i < selectedElements.length; i++) {
        var input = selectedElements[i];
        console.log(input.value);
    }
}
