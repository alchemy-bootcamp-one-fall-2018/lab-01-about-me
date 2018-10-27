var additionCalculatorForm = document.getElementById('addition-calculator');
var randomNumberResponse = document.getElementById('addition-calculator-response')

function addNumbers() {
    var elements = additionCalculatorForm.elements;
    var firstNumberInput = elements.firstDigit;
    var firstNumber = firstNumberInput.value;
    var secondNumberInput = elements.secondDigit;
    var secondNumber = secondNumberInput.value;

    var submitButton = elements.submit;

    var answer = parseInt(firstNumber) + parseInt(secondNumber);

    randomNumberResponse.textContent = answer;
    
}


function resetCalculator() {
    console.log('rest works')
}