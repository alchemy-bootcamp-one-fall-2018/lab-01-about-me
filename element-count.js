/* eslint no-console: "off" */
/* exported countQuerySelector */
'use strict';

function countQuerySelector() {
    var checked = document.querySelectorAll('input[name="tagName"]:checked');
    console.log(checked[0].value.length);

    for(var i = 0; i < countQuerySelector.length; i++) {
        var elementIndex = countQuerySelector[i];
        var tags = (document.querySelectorAll(elementIndex.value));
        var tagCount = tags.length;
        console.log(tagCount);
    }

    
}

