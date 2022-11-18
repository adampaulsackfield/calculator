// Operator map was used to quickly cross reference the symbols given and the corrosponding function. This approach was taken as I couldn't find another way to substitute the stringed version with the math operator.
import { adder, divider, multiplier, subber } from './operators.mjs';

export const operatorMap = {
	'/': divider,
	'*': multiplier,
	'+': adder,
	'-': subber,
};
