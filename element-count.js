/* exported tryQuerySelector guessCount resetCount totalCount */
'use strict'

function tryQuerySelector() {
    var sectionInputs = document.querySelectorAll('input[name="section"]:checked');
    var totalCount = document.getElementById("total-count"); 
    var msg = " "; 
    
    for (var i=0; i < sectionInputs.length; i++) {
        
        var input = sectionInputs[i].value; 
        console.log(input);
        var total = document.querySelectorAll(input); 
        var count = total.length;
        console.log(count);
        
         msg += input + ' - ' + count + "<br>";
        
    }
    totalCount.innerHTML = msg; 
}   
