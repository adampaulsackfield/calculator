import { convertToArray, calculate } from './functions.mjs';
import { getState, setState } from './state-manager.mjs';
import './listeners.mjs';

const equals = document.getElementById('equals');

// Calculator Logic

const startCalc = () => {
	const state = getState();
	state.original = state.currentString;
	state.current = convertToArray(state.original);
	setState(state);
	calculate();
};

// When the user click equals we can convert the incoming string to an array and set this as the current state.
equals.addEventListener('click', () => startCalc());
