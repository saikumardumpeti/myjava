let currentInput = '';
let currentResult = 0;
let operator = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    if (currentInput !== '') {
        if (currentInput.includes('+')) {
            const operands = currentInput.split('+');
            currentResult = parseFloat(operands[0]) + parseFloat(operands[1]);
        } else if (currentInput.includes('-')) {
            const operands = currentInput.split('-');
            currentResult = parseFloat(operands[0]) - parseFloat(operands[1]);
        } else if (currentInput.includes('*')) {
            const operands = currentInput.split('*');
            currentResult = parseFloat(operands[0]) * parseFloat(operands[1]);
        } else if (currentInput.includes('/')) {
            const operands = currentInput.split('/');
            currentResult = parseFloat(operands[0]) / parseFloat(operands[1]);
        }
        display.value = currentResult;
        currentInput = '';
    }
}
