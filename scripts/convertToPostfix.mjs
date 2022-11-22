const precedenceMap = {
	'+': 1,
	'-': 1,
	'*': 2,
	'/': 2,
	'(': 0,
	')': 0,
};

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

// convertToPostfix('4+4*6*3-4/2+9-2');
