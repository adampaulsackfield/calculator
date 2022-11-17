import { operatorMap } from './map.mjs';

const divider = (a, b) => {
	return a / b;
};

const multiplier = (a, b) => {
	return a * b;
};

const adder = (a, b) => {
	return a + b;
};

const subber = (a, b) => {
	return a - b;
};

const convertToArray = (str) => {
	// TODO - Add some logic to sanitise inputs.
	return str.split(' ');
};

export { divider, multiplier, adder, subber, convertToArray };
