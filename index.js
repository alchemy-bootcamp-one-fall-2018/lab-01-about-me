/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';


function tryQuerySelector() {
    var buttonInputs = document.querySelectorAll('input[name="button"]');

    for(var i = 0; i < buttonInputs.length; i++) {
        var input = buttonInputs[i];
        console.log(input.value, input.id, input.checked);
    }
    var selectedButtonInput = document.querySelector('input[name="button"]:checked');

    if(selectedButtonInput) {
        console.log('Hey', selectedButtonInput.value);
    } else {
        console.log('No Element Selected');
    }

    var elements = ['p', 'h2', 'input'];
    for(var j = 0; j < elements.length; j++) {
        console.log(elements[j]);
    }

    // var tags = document.querySelectorAll('input[name="tags"]:checked');
    // for(var k; k < tags.length; k++) {
    //  console.log(tags[k].value);
    // }
}