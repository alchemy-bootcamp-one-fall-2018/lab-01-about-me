/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';



function tryQuerySelector(){
    //var elementInput = document.querySelectorAll('input[name="element"]');   //looks for checked elements
    var selectedElementInput = document.querySelectorAll('input[name="element"]:checked');   //checks for number of checks per element
    
    for(var i = 0; i < selectedElementInput.length; i++) {
        var input = selectedElementInput[i];
        var elementList = document.querySelectorAll(input[i]);
        var elementFreq = (elementList.length);
        console.log(elementFreq);
    }
      //  console.log(elementInput[i].value)
      //  console.log(input.value, input.checked);
    
}
    //console.log (selectedElementInput);

    //for(var i = 0; i<selectedElementInput.length; i++) {

    //}

    //if(selectedElementInput) {
      //  console.log(selectedElementInput.value);
    //}else{
      //  console.log(selectedElementInput + 'is zero');
    //}
    
    

//tryQuerySelector(selectedElementInput);





//function tryQuerySelector() {
//    var mealInputs = document.querySelectorAll('input[name="meal"]');
//     for(var i = 0; i < mealInputs.length; i++) {
//        var input = mealInputs[i];
//        console.log(input.value, input.id, input.checked);
//    }
//     var selectedMealInput = document.querySelector('input[name="meal"]:checked');
//     if(selectedMealInput) {
//        console.log(selectedMealInput.value);
//    }
//    else {
//        console.log('no meal selected');
//  }
//     console.log(xIsTheNumber);
//}

//var tags = document.querySelectorAll('input[name="tags"]:checked');
//Create your response text as you are looping through the list of checked tags

//Get the value of the checkbox by calling tags[i].value and store in a tag variable
//Call document.querySelectorAll(tag) and add the tag and length of the returned query into your response text
//Response text might look like: