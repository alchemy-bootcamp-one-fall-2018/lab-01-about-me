/*eslint no-console: "off" */
/*exported tryElementCounter  */

'use strict';
var elementResponse = document.getElementById('response');

function tryElementCounter() {

    
    // var elementsInput = document.querySelectorAll('input[name="elements"]');
    var tags = document.querySelectorAll('input[name="elements"]:checked');
    
    for(var i = 0; i < tags.length; i++){
        var tag = document.querySelectorAll(tags[i].value);
    
        var length = tag.length;
        
        var response = tags[i].value + ' - ' + length;
        elementResponse.textContent += response;
    }
    
    
}