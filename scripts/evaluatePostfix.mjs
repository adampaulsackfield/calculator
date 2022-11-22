export const evaluatePostfix = (postfix) => {
	let stack = [];

	let postfixArr = postfix.split('');

	postfixArr.forEach((char) => {
		console.log('Here', { char, stack });
		if (!isNaN(Number(char))) {
			stack.push(Number(char));
		} else {
			let operandOne = stack.pop();
			let operandTwo = stack.pop();

			switch (char) {
				case '+':
					stack.push(operandTwo + operandOne);
					break;
				case '-':
					stack.push(operandTwo - operandOne);
					break;
				case '/':
					stack.push(operandTwo / operandOne);
					break;
				case '*':
					stack.push(operandTwo * operandOne);
					break;
			}
		}
	});
	return stack.pop();
};

let exp = '446*3*+42/-9+2-';
console.log(evaluatePostfix(exp));
