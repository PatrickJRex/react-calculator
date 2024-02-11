'use strict';

const sum = (a,b) => {
   return a+b;
};

const subtract = (a,b) => {
    return a-b;
};

const multiply = (a,b) => {
 return a * b;
};

const divide = (a,b) => {
   return a / b;
};

export const inversion = (num) => {
    const number = parseFloat(num);
    let newNumber = null;
    if(number > 0) {
        newNumber = -Math.abs(number);
    } else {
        newNumber = Math.abs(number);
    }
    
    return newNumber;
}

export const toDecimal = (num) => {
    const number = parseFloat(num);
    return (number/100).toFixed(2);
};

export const evaluate = ({currentOperand, prevOperand, operation}) => {
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    if(isNaN(prev)|| isNaN(current)) return "";
    let result;
    switch(operation) {
        case '+': 
        result = sum(prev, current);
        break;
        case '-': 
        result = subtract(prev, current);
        break;
        case '÷': 
        result = divide(prev, current);
        break;
        case 'x': 
        result = multiply(prev, current);
        break;
    }

    console.log(result);

    return result;
}
