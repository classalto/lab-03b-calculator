/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
// Import math functions
import { getSum, getSubtract, getDivision, getMultiply } from './utils.js';

// Get DOM elemts (input fields and result box)
const inputField1 = document.getElementById('user-input-one');
const inputField2 = document.getElementById('user-input-two');
const resultBox = document.getElementById('result');


// event handler functions
export function additionEventHandler() {
    const inputNumber1 = Number(inputField1.value);
    const inputNumber2 = Number(inputField2.value);

    const result = getSum(inputNumber1, inputNumber2);

    resultBox.textContent = inputNumber1 + ' + ' + inputNumber2 + ' = ' + result;
}

// on-click event for subtraction
export function subtractionEventHandler() {
    const inputNumber1 = Number(inputField1.value);
    const inputNumber2 = Number(inputField2.value);

    const result = getSubtract(inputNumber1, inputNumber2);

    resultBox.textContent = inputNumber1 + ' - ' + inputNumber2 + ' = ' + result;
}

// on-click event for multiplication
export function divisionEventHandler() {
    const inputNumber1 = Number(inputField1.value);
    const inputNumber2 = Number(inputField2.value);

    const result = getDivision(inputNumber1, inputNumber2);

    resultBox.textContent = inputNumber1 + ' / ' + inputNumber2 + ' = ' + result;
}

// onclick event for division
export function multiplicationEventHandler() {
    const inputNumber1 = Number(inputField1.value);
    const inputNumber2 = Number(inputField2.value);

    const result = getMultiply(inputNumber1, inputNumber2);

    resultBox.textContent = inputNumber1 + ' x ' + inputNumber2 + ' = ' + result;
}
