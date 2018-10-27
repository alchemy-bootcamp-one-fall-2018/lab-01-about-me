var additionCalculatorForm = document.getElementById('addition-calculator');


function addNumbers() {
    var elements = additionCalculatorForm.elements;
    var firstNumberInput = elements.firstDigit;
    var firstNumber = firstNumberInput.value;
    
    var secondNumberInput = elements.secondDigit;
    var secondNumber = secondNumberInput.value;

    var submitButton = elements.submit;
    console.log(firstNumber, secondNumber);
    
}


function resetCalculator() {
    console.log('rest works')
}