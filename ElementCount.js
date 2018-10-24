/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';



function tryQuerySelector(){
    var elementCount = document.querySelectorAll('input[name="element"]');
    for(var i = 0; i < elementCount.length; i++) {
        var input = elementCount[i];
        console.log(input.value, input.checked);
        console.log(input.value[i]);
    }
}

var selectedElementCount = document.querySelector('input[name="element]:checked');