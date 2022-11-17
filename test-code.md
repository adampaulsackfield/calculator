# Test-Code

Here is a sample of the code I was experimenting with before I started the project, as I wanted to get an idea of what would be the best way to approach this. As the rules stated to not look at any tutorials.

## Method One

Method one would be to use two input variables and a variable to store the operator (sign) and use a calculate function with if statements to perform the correct operation. Although this approach seems to work I don't forsee how it could be expanded easily to add more input and operations.

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

## Method Three

After some more thinking about the problem, it occurred to me that it may be more expandable if I only used one input as a string. This way I could add the operators surrounded by a space ` + `. After splitting into an array it's possible to loop over and find the operators and using the index to perform the operation on the left and right side. Then saving the result at `i - 1` and removing the operator and right side we can recursively call it if we wrap it in a function. I tested the code whilst out walking on CodePen and it seems promising.

```js
const sum = '4 + 4 * 4'

const sumArr = sum.split(' ')

console.log(sumArr)

sumArr.forEach((item, i) => {
  if(item === '*') {
    console.log(sumArr[i - 1] * sumArr[i + 1])

    sumArr[i - 1] = sumArr[i - 1] * sumArr[i + 1]
  }
})

console.log(sumArr)

// [ '4', '+', '4', '*', '4' ]
// 16
// [ '4', '+', 16, '*', '4' ]
```

## Outcome

After settling on Method Three, I quickly realized it was difficult to escape out of a forEach method, I experimented with for-loops, some and every, but finally settled on .find.