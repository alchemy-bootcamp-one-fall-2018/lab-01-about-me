/* eslint no-console: "off" */
/* exported tryQuerySelector*/

'use strict';
var elementResponseP = document.querySelectorAll('element-response-P');
var elemenResponseDiv = document.querySelectorAll('element-response-Div');
var elemenResponseLi = document.querySelectorAll('element-response-Li');
var elemenResponseInput = document.querySelectorAll('element-response-Input');

function tryQuerySelector() {
    var tags = document.querySelectorAll('input[name="element"]:checked');
    for(var i = 0; i < elementResponse.length; i++) {
        var tag = document.querySelectorAll(tags[i].value); 
        var inputname = tags[i].value;
        var numberelement = tag.length;
        var elementResponse= (inputname + '_' + numberelement)
        
        if (elementList === "P") {
            elementResponse.textContent = elementResponse;
        }
        else if (elementList === "Div") {
            elementResponse.textContent = elementResponse;
        } 
        else if (elementList === "Li") {
            elementResponse.textContent = elementResponse;
        }
        else if (elementList === "Input") {
            elementResponse.textContent = elementResponse;
        }
    }
    
}