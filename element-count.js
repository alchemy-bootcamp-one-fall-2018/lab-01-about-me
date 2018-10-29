/* exported tryQuerySelector */
'use strict';

function tryQuerySelector() {
    var selectedElement = document.querySelectorAll('input[name="element"]:checked');
    var result = '';

    for(var i = 0; i < selectedElement.length; i++) {
        
        var elementName = selectedElement[i].value;
        var element = document.querySelectorAll(elementName);
        result += elementName + ': ' + element.length + '<br>';
    }
    var response = document.getElementById('response');
    response.innerHTML = result;
}
