/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use-strict';
// Create a function in a stand alone .js file and log a message to let you know the function fired
// Wire the onclick of the button to call the function and validate that it logs the message
function tryQuerySelector() {
    var tags = document.querySelectorAll('input[name="element"]:checked');
    //console.log(tags);
    
    // Gather the selected checkboxes, analyze DOM, set results
    // In your function, get a list of all the checked checkboxes, for example:
    // var tags = document.querySelectorAll('input[name="tags"]:checked');
    for(var i = 0; i < tags.length; i++) {
        var input = tags[i];
        console.log(input.value); //returns nodelist
         // Create your response text as you are looping through the list of checked tags
    // Call document.querySelectorAll(tag) and add the tag and length of the returned query into your response text
        
        var tag = document.querySelectorAll(input.value);
        console.log(tag.length);
        
        if(input.value === 'p'){
            document.getElementById('paragraph-response').innerHTML = input.value + ' - ' + tag.length;
        }
        else if(input.value === 'section'){
            document.getElementById('section-response').innerHTML = input.value + ' - ' + tag.length; 
        }
        else if(input.value === 'label'){
            document.getElementById('label-response').innerHTML = input.value + ' - ' + tag.length;  
        }

    }

}
    












// Response text might look like:

// p - 5
// section - 2              
        
    
    
