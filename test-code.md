# Test-Code

Here is a sample of the code I was experimenting with before I started the project, as I wanted to get an idea of what would be the best way to approach this. As the rules stated to not look at any tutorials.

## Method One

Method one would be to use two input variables and a variable to store the operator (sign) and use a caluclate function with if statements to perform the correct operation. Although this approach seems to work I don't forsee how it could be expanded easily to add more input and operations.

```js
const inputOne = 50;
const inputTwo = 25;
let sign = '+';

const calculate = (num1, operator, num2) => {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '/') return num1 / num2;
  if (operator === '*') return num1 * num2;
    return 'handleError';
};
console.log(calculate(inputOne, sign, inputTwo)); // 75
sign = '-';
console.log(calculate(inputOne, sign, inputTwo)); // 50
sign = '/';
console.log(calculate(inputOne, sign, inputTwo)); // 2
sign = '*';
console.log(calculate(inputOne, sign, inputTwo)); // 1250
```

## Method Two

The second approach was to create separate functions for each operation and store them in a reference object, so they can be called easier from a calculate function. I feel this approach would make expansion a little easier with terms of BODMAS order of operations.

```js
const inputOne = 10;
const inputTwo = 10;
let sign = 'adder'

const adder = (num1, num2) => {
  return num1 + num2
}

const subber = (num1, num2) => {
  return num1 - num2
}

const calculatorFunctions = {
  adder,
  subber
}

const secondCalculate = (num1, calcFunc, num2) => {
  return calculatorFunctions[calcFunc](num1,num2)
}

console.log(secondCalculate(inputOne, 'adder', inputTwo))
sign = 'subber'
console.log(secondCalculate(inputOne, 'subber', inputTwo))
```