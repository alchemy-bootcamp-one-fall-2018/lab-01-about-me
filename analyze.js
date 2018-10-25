'use strict';
/* exported howMany */

function howMany() {
    var answer = document.getElementById('answer');
    var tags = document.querySelectorAll('input[name="searchElms"]:checked');
    var msg = '';

    for(var i = 0; i < tags.length; i++){
        var el = tags[i].value;
        var amount = document.querySelectorAll(el).length;
        msg += el + ' - ' + amount + '<br>';
    }
    msg += 'Checked boxes - ' + tags.length + '<br>';
    answer.innerHTML = msg;
}