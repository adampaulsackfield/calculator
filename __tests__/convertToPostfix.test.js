import { convertToPostfix } from '../scripts/convertToPostfix.js';
import {
	simpleExpressions,
	complexExpressions,
} from '../assets/expressions.js';

describe('convertToPostfix()', () => {
	it('should be able to convert simple expressions', () => {
		simpleExpressions.forEach((expression) => {
			expect(convertToPostfix(expression.input)).toEqual(expression.postfix);
		});
	});

	it('should be able to convert more complex expressions', () => {
		complexExpressions.forEach((expression) => {
			expect(convertToPostfix(expression.input)).toEqual(expression.postfix);
		});
	});
});
