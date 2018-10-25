/*eslint no-console: "off" */
/*exported tryElementCounter  */

'use strict';
var pResponse = document.getElementById('response-p');
var sectionResponse = document.getElementById('response-section');
var inputResponse = document.getElementById('response-input');
var buttonResponse = document.getElementById('response-button');

function tryElementCounter() {

    
    // var elementsInput = document.querySelectorAll('input[name="elements"]');
    var tags = document.querySelectorAll('input[name="elements"]:checked');
    
    for(var i = 0; i < tags.length; i++){
        var tag = document.querySelectorAll(tags[i].value);
        var inputName = tags[i].value;
        var length = tag.length;
        var response = inputName + ' - ' + length;
       
        if(inputName === 'p'){
            pResponse.textContent = response;
            
        }

        else if(inputName === 'section'){
            sectionResponse.textContent = response;
            
        }

        else if(inputName === 'input'){
            inputResponse.textContent = response;
            
        }

        else if(inputName === 'button'){
            buttonResponse.textContent = response;
            
        }
    
        
    }

    

    

}

