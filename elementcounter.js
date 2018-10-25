'use strict';

var queryResponse = document.getElementById('query-results');
function tryQuerySelector() {
    var tags = document.querySelectorAll('input[name="tag"]:checked');
    
    for(var i = 0; i < tags.length; i++) { 
        var number = document.querySelectorAll(tags[i].value);
        console.log(tags[i].id, number.length);

        queryResponse.textContent = queryResponse.textContent + tags[i].id + '  : ' + number.length + '\r\n'; 

    }
}




