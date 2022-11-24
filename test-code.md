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
let sign = 'adder';

const adder = (num1, num2) => {
  return num1 + num2
};

const subber = (num1, num2) => {
  return num1 - num2
};

const calculatorFunctions = {
  adder,
  subber
};

const secondCalculate = (num1, calcFunc, num2) => {
  return calculatorFunctions[calcFunc](num1,num2);
};

console.log(secondCalculate(inputOne, 'adder', inputTwo));
sign = 'subber';
console.log(secondCalculate(inputOne, 'subber', inputTwo));
```

## Method Three

After some more thinking about the problem, it occurred to me that it may be more expandable if I only used one input as a string. This way I could add the operators surrounded by a space ` + `. After splitting into an array it's possible to loop over and find the operators and using the index to perform the operation on the left and right side. Then saving the result at `i - 1` and removing the operator and right side we can recursively call it if we wrap it in a function. I tested the code whilst out walking on CodePen and it seems promising.

```js
const sum = '4 + 4 * 4';

const sumArr = sum.split(' ');

console.log(sumArr);

sumArr.forEach((item, i) => {
  if(item === '*') {
    console.log(sumArr[i - 1] * sumArr[i + 1]);

    sumArr[i - 1] = sumArr[i - 1] * sumArr[i + 1];
  }
})

console.log(sumArr);

// [ '4', '+', '4', '*', '4' ]
// 16
// [ '4', '+', 16, '*', '4' ]
```

## Method Four

Method three was very promising, but it quickly become evident it was going to a massive undertaking to add more features and work on the order of operations from left-to-right. It was then that I stumbled across an algorithm called _Shunting Yard Algorithm_ which is a method for converting an _infix_ equation to a _postfix_ / _Reverse Polish Notation_ which can then be evaluated using a _postfix_ parser. The conversion process is quite simple; you either push the current char to the stack or to the output, depending on several rules. This process is perfect for full implementation of BODMAS / PEDMAS and will be able to add bracket functionality with ease.

```js
const input = 7+6*3-2;

const convertedToPostfix = 763*+2-;

const evaluated = 23;
```

## Outcome

Really impressed to have found an algorithm and being able to implement this in JavaScript has been extremely fun to do. At first it was quite difficult to wrap my head around the _Shunting Yard Algorithm_, but after a few articles and couple of short YouTube videos, it made a lot more sense. With method four I was able to reduce the codebase by a considerable amount, thus lowering the complexity and allowing for more features to be added. It also makes it a lot more readable. I was also really happy to add E2E testing with Jest and Cypress, now whenever I add new features, I can quickly be sure that old features still work.

## Resources

- [Reddit Post that mentioned SYA](https://www.reddit.com/r/AskProgramming/comments/cbas25/how_to_program_pemdas_in_c/)
- [Shunting Yard Wikipedia](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)
- [Shunting Yard Algorithm Video Description](https://youtu.be/Wz85Hiwi5MY)
- [Postfix Stack Evaluation Video Description](https://youtu.be/bebqXO8H4eA)