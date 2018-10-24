/*eslint no-console: "off" */
/*exported tryElementCounter  */

'use strict';
var response = '';

function tryElementCounter() {

    
    // var elementsInput = document.querySelectorAll('input[name="elements"]');
    var tags = document.querySelectorAll('input[name="elements"]:checked');
    
    for(var i = 0; i < tags.length; i++){
        var tag = document.querySelectorAll(tags[i].value);
        console.log(tag.length);
        var length = tag.length;
        response = tags[i].value + ' - ' + length;
        console.log(response);
    }
    
    

}