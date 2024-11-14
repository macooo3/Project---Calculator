'strict';
const display = document.querySelector('.calc-display');
const clearBtn = document.querySelector('.clear-btn');
const percentBtn = document.querySelector('.percent-btn');
const divideBtn = document.querySelector('.divide-btn');
const seven = document.querySelector('.seven-btn');
const eight = document.querySelector('.eight-btn');
const nine = document.querySelector('.nine-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const four = document.querySelector('.four-btn');
const five = document.querySelector('.five-btn');
const six = document.querySelector('.six-btn');
const minusBtn = document.querySelector('.minus-btn');
const one = document.querySelector('.one-btn')
const two = document.querySelector('.two-btn')
const three = document.querySelector('.three-btn')
const addBtn = document.querySelector('.add-btn')
const zero = document.querySelector('.zero-btn')
const numbers = document.querySelectorAll('.nump')
let values = [];


const calculate = function (a, b, operator) {
  if (operator === '+') return +a + +b;
  if (operator === '-') return +a - +b;
  if (operator === '/') return a / b;
  if (operator === '*') return a * b;
};
const showNum = function (num) {
  if (display.innerHTML === '0') {
    display.innerHTML = num;
  } else if (
    display.innerHTML.length < 6 &&
    !display.classList.contains('none')
  ) {
    display.innerHTML += num;

    display.classList.add('active');
  } else if (display.classList.contains('none')) display.innerHTML = num;
  display.classList.remove('none');
};

const listenNum = function (btn, num) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    showNum(num);
  });
};

const listenOP = function (btn, op) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    values.push(display.innerHTML);
    console.log(values);
    if (values.length === 3) {
      const newDisplay = calculate(values[0], values[2], values[1]);
      display.innerHTML = newDisplay;
      values = []
      values.push(newDisplay)
      values.push(op)
    }
    if (values.length === 1) {
      values.push(op)
    }
  
    console.log(values);
    display.classList.remove('active');
    display.classList.add('none');
  });
};



listenOP(minusBtn, '-');
listenOP(multiplyBtn, '*');
listenOP(divideBtn, '/')
listenOP(addBtn, '+')

// listenNum(seven, '7');
// listenNum(eight, '8');
// listenNum(nine, '9');
// listenNum(four, '4');
// listenNum(five, '5');
// listenNum(six, '6');
// listenNum(one, '1')
// listenNum(two, '2')
// listenNum(three, '3')

numbers.forEach
