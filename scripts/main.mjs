import { operatorMap } from './map.mjs';
import { convertToArray } from './functions.mjs';

const inputs = document.querySelectorAll('.input');
const equals = document.getElementById('equals');
const answer = document.getElementById('answer');
const undo = document.getElementById('undo');
const reset = document.getElementById('reset');

let currentCalculation = document.getElementById('currentCalculation');

// Calculator Logic

// State - I wanted to track the current state and the previous state to enable the undo button. That way before any operation we can set the previous state to the current state.
const state = {
	current: [],
	currentString: '',
	previousString: '1',
	original: '',
};

const addInput = (e) => {
	state.previousString = currentCalculation.innerHTML;

	currentCalculation.innerHTML += e.target.dataset.value;
};

const undoInput = () => {
	currentCalculation.innerHTML = state.previousString;
};

const resetInput = () => {
	currentCalculation.innerHTML = '';
	answer.innerHTML = '0';
};

// On inputs update previous state to current state then add next input.
inputs.forEach((input) => {
	input.addEventListener('click', (e) => addInput(e));
});

// Undo by reverting to previous state.
undo.addEventListener('click', () => undoInput());

// Reset Functionality
reset.addEventListener('click', () => resetInput());

const startCalc = (equation) => {
	state.current = convertToArray(equation);
	calculate();
};

// When the user click equals we can convert the incoming string to an array and set this as the current state.
equals.addEventListener('click', () => startCalc(currentCalculation.innerHTML));

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
		answer.innerHTML = state.current;
		return { question: state.original, answer: state.current };
	}
};
