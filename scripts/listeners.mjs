import { addInput, undoInput, resetInput } from './functions.mjs';

const inputs = document.querySelectorAll('.input');
const undo = document.getElementById('undo');
const reset = document.getElementById('reset');

// Event listeners for anything that can update the current user input on the display.
inputs.forEach((input) => {
	input.addEventListener('click', (e) => addInput(e));
});

// Event listener for the undo feature
undo.addEventListener('click', () => undoInput());

// Event listener for the reset feature
reset.addEventListener('click', () => resetInput());
