/* eslint no-console: "off" */
/* exported tryQuerySelector refreshPage*/
'use strict';

var elementsResponse = document.getElementById(['elements-response']);


function tryQuerySelector() {
    var tags = document.querySelectorAll('input[name="elements"]:checked');
    var submit = document.getElementById(['element-button']);

    for(var i = 0; i < tags.length; i++) {
        var number = document.querySelectorAll(tags[i].value);
        submit.disabled = true;

        elementsResponse.textContent = elementsResponse.textContent + 'You selected: ' + [tags[i].value] + ' (' + [number.length] + ' times)\r\n';
    }
}
// Reset button reloads the page
function refreshPage(){
    window.location.reload();
} 

