document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.calculator-display');
  const keys = document.querySelector('.calculator-keypad');
  let currentValue = '0';
  let previousValue = null;
  let operator = null;
  let waitingForOperand = false;

  keys.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.classList.contains('operator') ? 'operator' : key.textContent;
      
      if (!isNaN(action) || action === '.') {
        inputDigit(action);
      } else if (action === 'operator') {
        handleOperator(key.textContent);
      } else if (action === '=') {
        handleEquals();
      } else if (action === 'AC') {
        clear();
      } else if (action === '+/-') {
        changeSign();
      } else if (action === '%') {
        percentage();
      }
      
      updateDisplay();
    }
  });

  function inputDigit(digit) {
    if (waitingForOperand) {
      currentValue = digit;
      waitingForOperand = false;
    } else {
      currentValue = currentValue === '0' ? digit : currentValue + digit;
    }
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentValue);
    
    if (operator && waitingForOperand) {
      operator = nextOperator;
      return;
    }
    
    if (previousValue === null) {
      previousValue = inputValue;
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      currentValue = String(result);
      previousValue = result;
    }
    
    waitingForOperand = true;
    operator = nextOperator;
  }

  function handleEquals() {
    const inputValue = parseFloat(currentValue);
    
    if (previousValue === null) {
      return;
    }
    
    if (operator) {
      currentValue = String(calculate(previousValue, inputValue, operator));
      previousValue = null;
      operator = null;
      waitingForOperand = true;
    }
  }

  function clear() {
    currentValue = '0';
    previousValue = null;
    operator = null;
    waitingForOperand = false;
  }

  function changeSign() {
    currentValue = String(-parseFloat(currentValue));
  }

  function percentage() {
    currentValue = String(parseFloat(currentValue) / 100);
  }

  function calculate(a, b, op) {
    switch (op) {
      case '+': return a + b;
      case '−': return a - b;
      case '×': return a * b;
      case '÷': return a / b;
      default: return b;
    }
  }

  function updateDisplay() {
    display.textContent = currentValue;
  }
});