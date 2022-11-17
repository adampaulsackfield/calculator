import { operatorMap } from './map.mjs';
import { convertToArray } from './functions.mjs';

const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.calculator__button');

// Add event listener to checkbox for theme toggler.
themeToggle.addEventListener('change', () => {
	console.log(themeToggle.checked);
	body.classList.toggle('light-mode');
	calculator.classList.toggle('light-mode');
	buttons.forEach((button) => button.classList.toggle('light-mode'));
});

// Calculator Logic

// State - I wanted to track the current state and the previous state to enable the undo button. That way before any operation we can set the previous state to the current state.
const state = {
	current: [],
	previous: [],
	original: '',
};

// When the user click equals we can convert the incoming string to an array and set this as the current state.
const MOCK_USER_INPUT = '12 * 4 + 6 / 2 * 4 / 2 + 6 * 12';
state.current = convertToArray(MOCK_USER_INPUT);

// Function to perform single operations and update the current state. This is done by using the index for the operator and performing the operation on either side, saving the result on the left and removes the operator and the right side.
const performCurrentOperation = (index, operator) => {
	// TODO - Possibly check for NaN on operation and throw error if NaN is found.
	state.current[index - 1] = operatorMap[operator](
		+state.current[index - 1],
		+state.current[index + 1]
	);

	state.current.splice(index, 2);

	// After performing the operation we recursively call the calculate function.
	calculate();
};

const calculate = () => {
	// TODO - Implement testing
	// Find Division
	state.current.find((element, i) => {
		if (element === '/') {
			performCurrentOperation(i, element);
		}
	});

	// Find Multiply
	state.current.find((element, i) => {
		if (element === '*') {
			performCurrentOperation(i, element);
		}
	});

	// Find Add
	state.current.find((element, i) => {
		if (element === '+') {
			performCurrentOperation(i, element);
		}
	});

	// Find Subtract
	state.current.find((element, i) => {
		if (element === '-') {
			performCurrentOperation(i, element);
		}
	});

	// Important to end the recursion, we can assume if one element left then we have the answer.
	if (state.current.length === 1) {
		return { question: state.original, answer: state.current };
	}
};

state.original = MOCK_USER_INPUT;

console.log(calculate());
