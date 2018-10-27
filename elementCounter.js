var queryResponse = document.getElementById('query-results');
var queryForm = document.getElementByeId('query-form');

  function tryQuerySelector() {
      var inputCounter = document.querySelectorAll('input[name="counter"]:checked');
    
      for(var i=0; i < inputCounter.length; i++) {
        var input = document.querySelectorAll(inputCounter[i].value);
        console.log(inputCounter[i].id, input.length);

        queryResponse.textContent = queryResponse.textContent + inputCounter[i].id + ' : ' + input.length + ' \r\n ';

      }
    
 }
 
  function resetQueryCounter() {
    var response = queryResponse.elements;

    response.classList.remove(queryResponse);

    queryResponse.textContent = '';
}

        

     
     

    
