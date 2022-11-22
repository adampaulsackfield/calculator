import { evaluatePostfix } from '../scripts/evaluatePostfix.js';
import {
	simpleExpressions,
	complexExpressions,
} from '../assets/expressions.js';

describe('evaluatePostfix()', () => {
	it('should be able to convert postfix notation', () => {
		simpleExpressions.forEach((expression) => {
			expect(evaluatePostfix(expression.postfix)).toEqual(expression.answer);
		});
	});

	it('should be able to convert more complex postfix notation', () => {
		complexExpressions.forEach((expression) => {
			expect(evaluatePostfix(expression.postfix)).toEqual(expression.answer);
		});
	});
});
