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
	square: (a) => a * a,
	cube: (a) => a * a * a,
	xPowerY: (a, b) => a ** b,
};

export { precedenceMap, operatorMap };
