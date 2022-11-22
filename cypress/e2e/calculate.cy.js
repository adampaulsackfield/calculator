const inputNumber = (num) => {
	const buttons = cy.get(`.input`);
};

describe('Calculator', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5500/index.html');
	});

	describe('Inputting Numbers', () => {
		it('should be able to input a single number to the screen', () => {
			setTimeout(() => {
				inputNumber(4);

				const currentCalculation = cy.get('#currentCalculation');

				currentCalculation.contains('4');
			}, 1000);
		});
	});
});
