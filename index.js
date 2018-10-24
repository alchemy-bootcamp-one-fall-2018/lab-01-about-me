/* eslint no-console: "off" */
/*exported tryElementCounter */
'use strict';

var pResponse = document.getElementById('pResponse');
var sectionResponse = document.getElementById('sectionResponse');
var inputResponse = document.getElementById('inputResponse');
var buttonResponse = document.getElementById('buttonResponse');


function tryElementCounter() {
    var tags = document.querySelectorAll('input[name="elements"]:checked');

    for(var i = 0; i < tags.length; i++) {
        var tag = document.querySelectorAll(tags[i].value);
        var tagName = tags[i].value;
        var length = tag.length;

        var answer = tagName + ' : ' + length;

        if(tagName === 'p') {
            pResponse.textContent = answer;
        }
        else if(tagName === 'section') {
            sectionResponse.textContent = answer;
        }
        else if(tagName === 'input') {
            inputResponse.textContent = answer;
        }
        else {
            buttonResponse.textContent = answer;
        }

    }
    
}


