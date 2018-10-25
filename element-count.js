function tryQuery() {
    var elementInputs = document.querySelectorAll('input[name="element"]');

//for loop thru array of element
    for(var i = 0; i < elementInputs.length; i++) {
        var input = elementInputs[i];
        console.log(input.value, input.id, input.checked);
    }

    var selectedElementInputs = document.querySelectorAll('input[name="element"]:checked');

if(selectedElementInputs) {
    console.log(selectedElementInputs.value);
    }
else {
    console.log('no element selected');
    }

    

}
