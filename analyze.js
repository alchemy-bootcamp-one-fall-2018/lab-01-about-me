'use strict';
/* exported howMany, stretch */


function howMany() {
    var tags = document.querySelectorAll('input[name="searchElms"]:checked');
    var answer = document.getElementById('answer');
    var msg = '';

    for(var i = 0; i < tags.length; i++){
        var el = tags[i].value;
        var amount = document.querySelectorAll(el).length;
        msg += el + ' - ' + amount + '<br>';
    }
    msg += 'Checked boxes - ' + tags.length + '<br>';
    answer.innerHTML = msg;

    stretch(tags);
}

function stretch(tags) {
    var tagCount = {};
    var html = '<ul>';
    var stretch = document.getElementById('stretch');
    
    for(var i = 0; i < tags.length; i++) {
        var el = tags[i].value;
        var elLength = document.querySelectorAll(el).length;
        
        tagCount[el] = elLength;
    }
    var keys = Object.keys(tagCount);
    
    for(var j = 0; j < tags.length; j++){
        html += '<li>' + keys[j] + tagCount[keys[j]] + '</li>';
    }

    html += '</ul>';
    stretch.innerHTML = html;
}