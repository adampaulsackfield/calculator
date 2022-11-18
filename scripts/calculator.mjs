import { setState, getState } from './state-manager.mjs';
import { operatorMap } from './map.mjs';

const answer = document.getElementById('answer');

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
	setState(state);

	// After performing the operation we recursively call the calculate function.
	calculate();
};

// The calculate function is called recursively until we are down to a single element array, indicating the calculation is complete. Using a series of Array.prototype.find methods we can stick to the Order of Operations, perform the next next sum and pass it over to performCurrentOperation, which will perform the single operation and call this function again.
const calculate = () => {
	// TODO - Implement testing
	const state = getState();

	// Important to end the recursion, we can assume if one element left then we have the answer.
	if (state.current.length !== 1) {
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

export { calculate, performCurrentOperation };
