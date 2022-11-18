import { addInput, undoInput, resetInput } from './functions.mjs';

const inputs = document.querySelectorAll('.input');
const undo = document.getElementById('undo');
const reset = document.getElementById('reset');

// On inputs update previous state to current state then add next input.
inputs.forEach((input) => {
	input.addEventListener('click', (e) => addInput(e));
});

// Undo by reverting to previous state.
undo.addEventListener('click', () => undoInput());

// Reset Functionality
reset.addEventListener('click', () => resetInput());
