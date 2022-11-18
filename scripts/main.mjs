import { convertToArray, resetInput, updateView } from './functions.mjs';
import { getState, setState } from './state-manager.mjs';
import { calculate } from './calculator.mjs';
import './listeners.mjs'; // Event Listeners are added.

// Equals is where the answer will be displayed in the DOM
const equals = document.getElementById('equals');

// The function that runs when '=' is clicked
const startCalc = () => {
	// Here the initalState is brought in and we set the original value (to track the equation, if needed) to the user input. Then we set state.current to an array form of the user input using a helper function. Finally, we set the updated state and run the calculate function.
	const state = getState();
	state.original = state.currentString;
	const didConvert = convertToArray(state.original);

	if (!didConvert) {
		window.alert('Invalid input');
		resetInput();
		return;
	}

	state.current = didConvert;
	setState(state);
	calculate();
};

// Event listener lives down here as it has to be after startCalc.
equals.addEventListener('click', () => startCalc());

// This checks for any state on load and if it exists we update the view to last state.
const state = getState();
if (state) updateView(state.currentString);
