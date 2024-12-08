
let currentInput = '';
let operator = '';
let previousInput = '';

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value || '0';c
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput !== '') {
        if (previousInput === '') {
            previousInput = currentInput;
        } else {
            calculate();
        }
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    updateDisplay(result);
    previousInput = result.toString();
    currentInput = '';
    operator = '';
}
