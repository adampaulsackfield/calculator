// Shunting Yard Algorithm
// After the previous attempt at adhering to BODMAS, I realized it broke down with operators with the same precedence, where it should read from left to right. After a considerable amount of searching I discoverd this algorithm [Wikipedia](https://en.wikipedia.org/wiki/Shunting-yard_algorithm), which is a method for parsing arithmetic or logical expressions, taking an infix and outputting a postfix or Reverse Polish Notation. The result can then be sent to a parser to evaluate the equation and provide the answer. The implementation here is for simple calculations and has been implemented using the Pseudo-code as shown in the Wikipedia article.

import { precedenceMap } from './maps.mjs';

export const convertToPostfix = (equation) => {
	let output = '';
	let stack = [];

	equation.forEach((char) => {
		console.log('Start', { output, stack, char }); // Debugging
		if (char === '+' || char === '-' || char === '*' || char === '/') {
			while (
				stack.length &&
				stack[stack.length - 1] !== '(' &&
				precedenceMap[char] <= precedenceMap[stack[stack.length - 1]]
			) {
				output += stack.pop();
			}
			stack.push(char);
		} else if (char === '(') {
			stack.push(char);
		} else if (char === ')') {
			while (stack.length && stack[stack.length - 1] !== '(') {
				output += stack.pop();
			}
			stack.pop();
		} else {
			output += char;
		}
	});

	while (stack.length != 0) {
		output += stack.pop();
	}

	console.log(output);

	return output;
};
