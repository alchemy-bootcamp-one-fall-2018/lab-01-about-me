var queryResponse = document.getElementById('query-results');

  function tryQuerySelector() {
      var inputCounter = document.querySelectorAll('input[name="counter"]:checked');
    
      for(var i=0; i < inputCounter.length; i++) {
        var input = document.querySelectorAll(inputCounter[i].value);
        console.log(inputCounter[i].id, input.length);

        queryResponse.textContent = queryResponse.textContent + inputCounter[i].id + ' : ' + input.length + ' \r\n ';

      }
     
 }
 
        

        

     
     

    
