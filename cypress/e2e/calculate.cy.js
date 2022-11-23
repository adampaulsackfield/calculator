describe('Calculator', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5500/index.html');
	});

	describe('Inputting Numbers', () => {
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

		it('should be able to perform a simple calculation', () => {
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

		it('should be able to perform a simple calculation, with more than one operator', () => {
			const answer = cy.get('#answer');

			const numTwo = cy.get('#number-2');
			const add = cy.get('#add');
			const minus = cy.get('#subtract');
			const equals = cy.get('#equals');

			numTwo.click();
			add.click();
			numTwo.click();
			minus.click();
			numTwo.click();
			equals.click();

			answer.contains('2'); // 2 + 2 - 2 = 2
		});
	});
});
