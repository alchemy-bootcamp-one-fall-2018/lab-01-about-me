/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';
var text = document.getElementById('response');

function tryQuerySelector() {
    var buttonChecked = document.querySelectorAll('input[name="button"]:checked');
    var response = '';
    for(var i = 0; i < buttonChecked.length; i++) {
        var input = buttonChecked[i].value;
        var inputList = document.querySelectorAll(input);
        response += ' ' + input + '-' + inputList.length;
    }
    text.textContent = response;
}
