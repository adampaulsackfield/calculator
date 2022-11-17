// Operator map was used to quickly cross reference the symbols given and the corrosponding function. This approach was taken as I couldn't find another way to substitue the stringed version with the math operator.
import { adder, divider, multiplier, subber } from './functions.mjs';

export const operatorMap = {
	'/': divider,
	'*': multiplier,
	'+': adder,
	'-': subber,
};
