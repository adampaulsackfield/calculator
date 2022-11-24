// A simple function for evaluating postfix / Reverse Polish Notation. We push operands to the stack until we come to an operator. At which point you collect the top two operands, perform the operation and add the result back to the stack. Repeat until there are no elements remaining, return the top of the stack.

import { operatorMap } from './maps.js';

export const evaluatePostfix = (postfix) => {
	let stack = [];

	postfix.forEach((char) => {
		if (!isNaN(Number(char))) {
			stack.push(Number(char));
		} else {
			let operandOne = stack.pop();
			let operandTwo = stack.pop();

			stack.push(operatorMap[char](operandTwo, operandOne));
		}
	});

	return stack.pop();
};
