  function tryQuerySelector() {
      var inputCounter = document.querySelectorAll('input[name="counter"]:checked');
    
      for(var i=0; i < inputCounter.length; i++) {
          
          var input = document.querySelectorAll(inputCounter[i].value);
          console.log(inputCounter[i].id, input.length);
      }
    }  

    
    //   var selectedCounterInput = document.querySelectorAll( 'input[name="counter"]:checked');
      
    //   var Counter = document.querySelectorAll('selectedCounterInput').length;

    // }

