import { setState, getState, initialState } from './state-manager.mjs';
import { convertToArray } from './helpers.mjs';

// Elements
let currentCalculation = document.getElementById('currentCalculation');
const answer = document.getElementById('answer');

// Function for updating the view for the user. Takes an optional 'clear' argument which will reset, rather than append to, the current calculation.
const updateView = (value, clear = false) => {
	if (clear) return (currentCalculation.innerHTML = value);

	currentCalculation.innerHTML += value;
	answer.innerHTML = 0; // ! May cause issue if adding ability to perform further sums on the answer.
};

// Due to having a state manager, with previous state, we can offer an undo feature that reverts the current state to the previous state.
const undoInput = () => {
	const previous = getState();

	const current = {
		...previous,
		currentString: previous.previousString,
	};
	setState(current);
	updateView(current.currentString, true);
};

// Simply just resets the state and also the screen.
const resetInput = () => {
	setState(initialState);
	updateView('', true);
};

// Using the spread operator on the current state of the previous state, we can then update the values we need. Those being the previousString and currentString. The data for each button press is stored as a data-value attribute on each element.
const addInput = (e) => {
	const previous = getState();

	// Logic here to check for invalid operator usage. Things like + + will not be allowed.
	// TODO - Add logic to stop illegal operations.

	const current = {
		...previous,
		previousString: previous.currentString,
		currentString: (previous.currentString += e.target.dataset.value),
	};
	setState(current);
	updateView(e.target.dataset.value);
};

export { convertToArray, undoInput, resetInput, updateView, addInput };
