const precedenceMap = {
	'+': 1,
	'-': 1,
	'*': 2,
	'/': 2,
	'(': 0,
	')': 0,
};

const operatorMap = {
	'/': (a, b) => a / b,
	'*': (a, b) => a * b,
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	X2: (a) => a * a,
	X3: (a) => a * a * a,
	xPowerY: (a, b) => a ** b,
};

export { precedenceMap, operatorMap };
