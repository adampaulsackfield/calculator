import { setState, getState, initialState } from './state-manager.mjs';
import { operatorMap } from './map.mjs';

let currentCalculation = document.getElementById('currentCalculation');
const answer = document.getElementById('answer');

const convertToArray = (str) => {
	// TODO - Add some logic to sanitize inputs.
	const regex = /([0-9*/\\+-\s])/g;

	console.log('test', regex.test(str));

	return str.split(' ');
};

const updateView = (value, clear = false) => {
	if (clear) return (currentCalculation.innerHTML = value);

	currentCalculation.innerHTML += value;
	answer.innerHTML = 0;
};

const undoInput = () => {
	// TODO - Ensure can only undo once
	const previous = getState();
	const current = {
		...previous,
		currentString: previous.previousString,
	};
	setState(current);
	updateView(current.currentString, true);
};

const resetInput = () => {
	setState(initialState);
	updateView('', true);
};

const addInput = (e) => {
	console.log('click');
	const previous = getState();
	const current = {
		...previous,
		previousString: previous.currentString,
		currentString: (previous.currentString += e.target.dataset.value),
	};
	console.log('c', current);
	setState(current);
	updateView(e.target.dataset.value);
};

// [1, '+', 1]
// Function to perform single operations and update the current state. This is done by using the index for the operator and performing the operation on either side, saving the result on the left and removes the operator and the right side.
const performCurrentOperation = (index, operator) => {
	// TODO - Possibly check for NaN on operation and throw error if NaN is found.

	const state = getState();

	if (state.current.length === 1) {
		answer.innerHTML = state.current;
		return { question: state.original, answer: state.current };
	}

	state.current[index - 1] = operatorMap[operator](
		+state.current[index - 1],
		+state.current[index + 1]
	);

	state.current.splice(index, 2);
	console.log('performCurrentOperation', state);
	setState(state);

	// After performing the operation we recursively call the calculate function.
	calculate();
};

const calculate = () => {
	// TODO - Implement testing
	const state = getState();

	// Important to end the recursion, we can assume if one element left then we have the answer.
	if (state.current.length !== 1) {
		console.log('here', state.current.length);
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
	} else {
		answer.innerHTML = state.current;
		return { question: state.original, answer: state.current };
	}

	return;
};

export {
	convertToArray,
	undoInput,
	resetInput,
	updateView,
	addInput,
	calculate,
};
