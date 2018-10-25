/* exported checkElementFinder */




function checkElementFinder()
{
    var elementFinder = document.querySelectorAll('input[name=elementType]:checked');
    var result = '';
    for(var i = 0; i < elementFinder.length; i++) {

        var elementValue = elementFinder[i].value;

        var elementNumber = document.querySelectorAll(elementValue).length;

        result += elementValue + ' ' + elementNumber + '<br>';
    }
    var printOutput = document.getElementById('elementReader');
    printOutput.innerHTML = result;
 
}