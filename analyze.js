'use strict';
/* exported howMany */

function howMany() {
    var answer = document.getElementById('answer');
    var tags = document.querySelectorAll('input[name="searchElms"]:checked');
    var msg = '';

    for(var i = 0; i < tags.length; i++){
        var el = tags[i].value;
        console.log(el);
        var amount = document.querySelectorAll(el).length;
        console.log(amount);
        msg += el + ' - ' + amount + '<br>';
    }
    answer.innerHTML = msg;
}