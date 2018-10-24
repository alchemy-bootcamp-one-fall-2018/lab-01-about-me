  function tryQuerySelector() {
      var inputCounter = document.querySelectorAll('input[name="counter"');
    
      for(var i=0; i < inputCounter.length; i++) {
          var input = inputCounter[i];
          console.log(input.value, input.id, input.checked);
      }

      var selectedCounterInput = document.querySelector( 'input[name="counter"]:checked');

    var inputCounter = document.querySelectorAll('')
    }

