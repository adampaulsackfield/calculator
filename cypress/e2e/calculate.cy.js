const buttonPresser = (arr) => {
	arr.forEach((button) => {
		let temp = cy.get(`#${button}`);

		temp.click();
	});

	return;
};

describe('Calculator', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5500/index.html');
	});

	describe('Inputting', () => {
		it('should be able to input a single number to the screen', () => {
			const currentCalculation = cy.get('#currentCalculation');
			const button = cy.get('#number-7');

			button.click();

			currentCalculation.contains('7');
		});

		it('should be able to add an operator to the screen', () => {
			const currentCalculation = cy.get('#currentCalculation');
			const button = cy.get('#add');

			button.click();

			currentCalculation.contains('+');
		});
	});

	describe('Simple Calculations', () => {
		it('should be able to perform a simple addition calculation', () => {
			const answer = cy.get('#answer');

			const numTwo = cy.get('#number-2');
			const add = cy.get('#add');
			const equals = cy.get('#equals');

			numTwo.click();
			add.click();
			numTwo.click();
			equals.click();

			answer.contains('4'); // 2 + 2 = 4
		});

		it('should be able to perform a simple subtraction calculation', () => {
			const answer = cy.get('#answer');

			const numTwo = cy.get('#number-2');
			const numFour = cy.get('#number-4');
			const minus = cy.get('#subtract');
			const equals = cy.get('#equals');

			numFour.click();
			minus.click();
			numTwo.click();
			equals.click();

			answer.contains('2'); // 4 - 2 = 2
		});

		it('should be able to work with decimals on a simple expression', () => {
			const answer = cy.get('#answer');

			const expression = [
				'number-5',
				'decimal',
				'number-3',
				'multiply',
				'number-4',
				'decimal',
				'number-2',
				'equals',
			];

			buttonPresser(expression);

			answer.contains('22.26'); // 5.3 * 4.2 = 22.26
		});

		it('should be able to perform a simple calculation, using negative numbers', () => {
			const answer = cy.get('#answer');
			const equals = cy.get('#equals');

			const expression = ['number-2', 'plusMinus', 'add', 'number-2', 'equals'];

			buttonPresser(expression);

			answer.contains('0'); // -2 + 2 = 0
		});
	});

	describe('Complex Calculations', () => {
		it('should be able to perform a simple calculation, with more than one operator', () => {
			const answer = cy.get('#answer');
			const equals = cy.get('#equals');

			const expression = [
				'number-2',
				'add',
				'number-2',
				'subtract',
				'number-2',
				'equals',
			];

			buttonPresser(expression);

			answer.contains('2'); // 2 + 2 - 2 = 2
		});

		it('should be able to perform a calculation, using all four operators', () => {
			const answer = cy.get('#answer');
			const equals = cy.get('#equals');

			const expression = [
				'number-2',
				'add',
				'number-2',
				'subtract',
				'number-6',
				'multiply',
				'number-3',
				'divide',
				'number-4',
				'equals',
			];

			buttonPresser(expression);

			answer.contains('0.5'); // 2 + 2 - 6 * 3 / 4 = 0.5
		});

		it('should be able to perform a calculation, using all four operators with some multiples of the same operator', () => {
			const answer = cy.get('#answer');
			const equals = cy.get('#equals');

			const expression = [
				'number-2',
				'number-2',
				'add',
				'number-5',
				'divide',
				'number-2',
				'multiply',
				'number-6',
				'multiply',
				'number-6',
				'add',
				'number-5',
				'subtract',
				'number-3',
				'equals',
			];

			buttonPresser(expression);

			answer.contains('114'); // 22 + 5 / 2 * 6 * 6 + 5 - 3 = 114
		});
	});

	describe('Function Buttons', () => {
		it('should be able to return a percentage as a decimal', () => {
			const answer = cy.get('#answer');

			const expression = ['number-5', 'percent'];

			buttonPresser(expression);

			answer.contains('0.05'); // 5% = 0.05
		});

		it('should be able to return a number squared', () => {
			const answer = cy.get('#answer');

			const expression = ['number-4', 'xSquared'];

			buttonPresser(expression);

			answer.contains('16'); // 4^2 = 16
		});

		it('should be able to return a number cubed', () => {
			const answer = cy.get('#answer');

			const expression = ['number-5', 'xCubed'];

			buttonPresser(expression);

			answer.contains('125'); // 5^3 = 125
		});

		it('should be able to raise a number to a given power', () => {
			const answer = cy.get('#answer');

			const expression = ['number-5', 'xPowerY', 'number-7'];

			buttonPresser(expression);

			answer.contains('78,125'); // 5^3 = 125
		});
	});
});
