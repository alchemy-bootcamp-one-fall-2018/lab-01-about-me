'use strict';
/* exported tryQuerySelector reset */
var queryResponse = document.getElementById('query-results');
function tryQuerySelector() {
    var tags = document.querySelectorAll('input[name="tag"]:checked');
    
    for(var i = 0; i < tags.length; i++) { 
        var number = document.querySelectorAll(tags[i].value);
        
        queryResponse.textContent = queryResponse.textContent + tags[i].id + '  : ' + number.length + '\r\n'; 

    }
}
/* exported clearMe */
function clearMe() {
    queryResponse.textContent = '';
    document.getElementById('p').checked = false;
    document.getElementById('section').checked = false;
    document.getElementById('input').checked = false;
    document.getElementById('div').checked = false;
    document.getElementById('li').checked = false;
}