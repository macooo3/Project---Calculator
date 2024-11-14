'strict'
const display = document.querySelector('.calc-display')
const clearBtn = document.querySelector('.clear-btn')
const percentBtn = document.querySelector('.')


const calculate = function (a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '/') return a / b;
    if (operator === '*') return a * b;
}
