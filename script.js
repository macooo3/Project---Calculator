'strict';
const display = document.querySelector('.calc-display');
const clearBtn = document.querySelector('.clear-btn');
const percentBtn = document.querySelector('.percent-btn');
const numbers = document.querySelectorAll('.nump');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal-btn');
const negPosBtn = document.querySelector('.neg-btn');
const decimal = document.querySelector('.dot-btn');
let values = [];

// replaced with operator
// const divideBtn = document.querySelector('.divide-btn');
// const multiplyBtn = document.querySelector('.multiply-btn');
// const minusBtn = document.querySelector('.minus-btn');
// const addBtn = document.querySelector('.add-btn');

// replaced with numbers
// const one = document.querySelector('.one-btn')
// const two = document.querySelector('.two-btn')
// const three = document.querySelector('.three-btn')
// const four = document.querySelector('.four-btn');
// const five = document.querySelector('.five-btn');
// const six = document.querySelector('.six-btn');
// const seven = document.querySelector('.seven-btn');
// const eight = document.querySelector('.eight-btn');
// const nine = document.querySelector('.nine-btn');

const calculate = function (a, b, operator) {
  if (operator === '+') return +a + +b;
  if (operator === '-') return a - b;
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
  } else if (display.classList.contains('none')) {
    display.innerHTML = num;
    display.classList.remove('none');
  }
};
const addDecimal = function () {
  if (!display.innerHTML.includes('.')) {
    display.innerHTML += '.';
  }
};

const convert = function () {
  const newNum = display.innerHTML / 100;
  display.innerHTML = newNum;
};

const negPos = function () {
  const newNum = display.innerHTML * -1;
  display.innerHTML = newNum;
};

const listenNum = function (num) {
  showNum(num);
};

const listenOP = function (op) {
  if (values.length === 0) {
    values.push(display.innerHTML);
  }
  if (values.length === 2) {
    values.push(display.innerHTML);
    const newDisplay = calculate(values[0], values[2], values[1]);
    display.innerHTML = newDisplay;
    values = [];
    values.push(newDisplay);
    !(op === '=') && values.push(op);
  }

  if (values.length === 1) {
    !(op === '=') && values.push(op);
  }
  display.classList.remove('active');
  display.classList.add('none');
};

// listenOP(minusBtn, '-');
// listenOP(multiplyBtn, '*');
// listenOP(divideBtn, '/');
// listenOP(addBtn, '+');
// listenOP(equals);

operator.forEach(btn => {
  btn.addEventListener('click', function () {
    const op = btn.innerHTML;
    listenOP(op);
  });
});

// listenNum(seven, '7');
// listenNum(eight, '8');
// listenNum(nine, '9');
// listenNum(four, '4');
// listenNum(five, '5');
// listenNum(six, '6');
// listenNum(one, '1')
// listenNum(two, '2')
// listenNum(three, '3')

numbers.forEach(btn => {
  btn.addEventListener('click', function () {
    const num = btn.innerHTML;
    listenNum(num);
  });
});

decimal.addEventListener('click', addDecimal);
percentBtn.addEventListener('click', convert);
negPosBtn.addEventListener('click', negPos);
clearBtn.addEventListener('click', function () {
  display.innerHTML = '0';
  values = [];
});
