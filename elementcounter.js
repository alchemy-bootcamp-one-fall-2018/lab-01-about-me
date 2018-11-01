/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

// eslint-disable-next-line


var xIsTheNumber = 12;

function tryQuerySelector() {
    var tagInputs = document.querySelectorAll('input[name="tag"]');

    for(var i = 0; i < tagInputs.length; i++) {
        var input = tagInputs[i];
        console.log(input.value, input.id, input.checked);
    }

    var selectedTagInput = document.querySelector('input[name="tag"]:checked');
    
    if(selectedTagInput) {
        console.log(selectedTagInput.value);
    }
    else {
        console.log('no tag selected');
    }
    console.log(xIsTheNumber);
}

  