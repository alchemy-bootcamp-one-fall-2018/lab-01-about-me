/* eslint no-console: "off" */
/*exported tryElementCounter */
'use strict';

var elementResponse = document.getElementById('response');




function tryElementCounter() {
    var tags = document.querySelectorAll('input[name="elements"]:checked');

    for(var i = 0; i < tags.length; i++) {
        var tag = document.querySelectorAll(tags[i].value);
        var tagName = tags[i].value;
        var length = tag.length;

        var test = tagName + ' : ' + length;
        console.log(test);
        
        elementResponse.textContent = test;
        
        
        console.log(tags[i].value, ' : ', length);

        

    
    }
    
}


