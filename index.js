/* eslint no-console: "off" */
/*exported tryElementCounter */
'use strict';

var response = '';




function tryElementCounter() {
    var tags = document.querySelectorAll('input[name="elements"]:checked');

    for(var i = 0; i < tags.length; i++) {
        var tag = document.querySelectorAll(tags[i].value);
        var length = tag.length;
        console.log(tags[i].value, ' : ', length);

    
    }
    
}


