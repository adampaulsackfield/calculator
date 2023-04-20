const simpleExpressions = [
	{ input: ['2', '+', '4'], postfix: ['2', '4', '+'], answer: 6 },
	{ input: ['8', '-', '3'], postfix: ['8', '3', '-'], answer: 5 },
	{ input: ['4', '*', '4'], postfix: ['4', '4', '*'], answer: 16 },
	{ input: ['9', '/', '3'], postfix: ['9', '3', '/'], answer: 3 },
];

const complexExpressions = [
	{
		input: ['4', '*', '6', '-', '8', '/', '5', '+', '5'],
		postfix: ['4', '6', '*', '8', '5', '/', '-', '5', '+'],
		answer: 27.4,
	},
	{
		input: ['22', '+', '5', '/', '2', '*', '6', '*', '6', '+', '5', '-', '3'],
		postfix: ['22', '5', '2', '/', '6', '*', '6', '*', '+', '5', '+', '3', '-'],
		answer: 114,
	},
];

export { simpleExpressions, complexExpressions };
