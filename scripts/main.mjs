import './events.mjs';
import { getState, setState } from './state-manager.mjs';
import { updateView } from './functions.mjs';
import { convertToPostfix } from './convertToPostfix.mjs';
import { evaluatePostfix } from './evaluatePostfix.mjs';

const equals = document.getElementById('equals');
const answer = document.getElementById('answer');
const currentCalculation = document.getElementById('currentCalculation');

const startCalc = () => {
	const previousState = getState();

	const updatedState = {
		...previousState,
		equation: [...previousState.equation, previousState.currentInput],
		currentInput: '',
		original: [...previousState.equation, previousState.currentInput],
	};

	setState(updatedState);

	// Here is where the Shunting Yard Algorithm is implemented and immediately evaluated using a stack.
	const postfix = convertToPostfix(updatedState.equation);
	const evaluation = evaluatePostfix(postfix);

	currentCalculation.innerHTML = previousState.original.join(' ');
	answer.innerHTML = evaluation.toLocaleString('en-UK');
};

equals.addEventListener('click', () => startCalc());

const state = getState();
if (state) updateView(state.equation.join(' '));
