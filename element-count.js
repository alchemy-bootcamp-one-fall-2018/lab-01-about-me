/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElements = document.querySelectorAll('input[name="elements"]:checked');
    console.log(selectedElements);

    for(var i = 0; i < selectedElements.length; i++) {
        var input = selectedElements[i].value;
        console.log(document.querySelectorAll(input).length);
               
    }
}
