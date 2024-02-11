'use strict';

const sum = (...args) => {
     [...args].reduce((a,b) => a + b, 0);
};

const subtract = (...args) => {
    [...args].reduce((a,b) => a - b, 0);
};

const multiply = (...args) => {
  [...args].reduce((a,b) => a * b, 0);
};

const divide = (...args) => {
    [...args].reduce((a,b) => a / b, 0);
};

const calculatePercentage = (...args) => {
    [...args].reduce((a,b) => (a/b) * 100);
};

export default function evaluate(args) {
    console.log(args)
    let prev = parseFloat(args.prevOperand);
    let current = parseFloat(args.currentOperand);
    if(!args.operation) return "";
    let result;
    switch(args.operation) {
        case '-': 
        result = subtract(prev, current);
        break;
        case '+': 
        result = sum(prev, current);
        break;
        case '÷':
        result = divide(prev, current);
        break;
        case 'X': 
        result = multiply(prev, current);
        break;
    }

    

    return result;
}
