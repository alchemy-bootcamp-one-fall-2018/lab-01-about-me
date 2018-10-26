/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';


function tryQuerySelector() {
    var buttonChecked = document.querySelectorAll('input[name="button"]');
    for(var i = 0; i < buttonChecked.length; i++) {
        var input = buttonChecked[i];
        console.log(input.value, input.id, input.checked);
        // console.log(buttonChecked[i].id, buttonChecked.length);
    }

    var selectedCheckedButton = document.querySelector('input[name="button"]:checked');
    if(selectedCheckedButton) {
        console.log('Hey this is the ' + selectedCheckedButton.value + ' tag');
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
        console.log(tag);
        // console.log(tags[k].length);
        // console.log(tag.length);
    }
}

