/* eslint-disable max-len */
// Import event handlers
import {additionEventHandler, subtractionEventHandler, divisionEventHandler, multiplicationEventHandler} from './handlers.js';

// get button DOM Elements
const addButton = document.getElementById('add-click');
const subButton = document.getElementById('sub-click');
const divButton = document.getElementById('div-click');
const multiButton = document.getElementById('mult-click');

// on-click event listener for addition
addButton.addEventListener('click', additionEventHandler);

// on-click event for subtraction
subButton.addEventListener('click', subtractionEventHandler);

// on-click event for multiplication
divButton.addEventListener('click', divisionEventHandler);

// onclick event for division
multiButton.addEventListener('click', multiplicationEventHandler);
