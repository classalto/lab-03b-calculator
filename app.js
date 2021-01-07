// get DOM Elements
const inputField1 = document.getElementById('user-input-one');
const inputField2 = document.getElementById('user-input-two');
const resultBox = document.getElementById('result');

// get button DOM Elements
const addButton = document.getElementById('add-click');
const subButton = document.getElementById('sub-click');
const divButton = document.getElementById('div-click');
const multiButton = document.getElementById('mult-click');
// on-click event listener for addition
addButton.addEventListener('click', () => {
  const inputNumber1 = Number(inputField1.value);
  const inputNumber2 = Number(inputField2.value);

  const result = inputNumber1 + inputNumber2;

  resultBox.textContent = result;
});

// on-click event for subtraction
subButton.addEventListener('click', () => {
  const inputNumber1 = Number(inputField1.value);
  const inputNumber2 = Number(inputField2.value);

  const result = inputNumber1 - inputNumber2;

  resultBox.textContent = result;
});

// on-click event for multiplication
divButton.addEventListener('click', () => {
  const inputNumber1 = Number(inputField1.value);
  const inputNumber2 = Number(inputField2.value);

  const result = inputNumber1 / inputNumber2;

  resultBox.textContent = result;
});

// onclick event for division
multiButton.addEventListener('click', () => {
  const inputNumber1 = Number(inputField1.value);
  const inputNumber2 = Number(inputField2.value);

  const result = inputNumber1 * inputNumber2;

  resultBox.textContent = result;
});
