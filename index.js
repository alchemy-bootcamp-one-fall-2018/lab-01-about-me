/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';


function tryQuerySelector() {
    var buttonInputs = document.querySelectorAll('input[name="button"]:checked');

    for(var i = 0; i < buttonInputs.length; i++) {
        var input = buttonInputs[i];
        console.log(input.value, input.id, input.checked);
        // console.log(buttonInputs[i].id, buttonInputs.length);
    }

    var selectedButtonInput = document.querySelector('input[name="button"]:checked');
    if(selectedButtonInput) {
        console.log('Hey this is the tag', selectedButtonInput.value);
    } else {
        console.log('No Element Selected');
    }
    
    var elements = ['p', 'h2', 'input'];
    for(var j = 0; j < elements.length; j++) {
        console.log(elements[j]);
    }
    
    var tags = document.querySelectorAll('input[name="button"]:checked');
    for(var k = 0; k < tags.length; k++) {
        var tag = tags[k].value;
        console.log(tags[k].length);
        console.log(tag.length);
    }
}

