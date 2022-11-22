// State Manager - Using localStorage and Setter & Getter functions, I was able to implement a crude state manager, this allows the user to undo. Also, added the ability to persist state after a refresh.

// Initial State
const initialState = {
	equation: [],
	currentInput: '',
	original: [],
	operatorLock: false,
	decimalLock: false,
	xPowerY: { running: false, value: '' },
};

// Setter - Store the current state in local storage, this must be a string.
const setState = (state) => {
	localStorage.setItem('calcState', JSON.stringify(state));
};

// Getter - Retrieve the string from localStorage and parse it.
const getState = () => {
	const state = localStorage.getItem('calcState');

	if (state) return JSON.parse(state);

	return initialState;
};

export { setState, getState, initialState };
