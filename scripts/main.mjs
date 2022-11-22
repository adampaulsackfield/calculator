import './events.mjs';
import { getState, setState } from './state-manager.mjs';
import { updateView } from './functions.mjs';
import { convertToPostfix } from './convertToPostfix.mjs';
import { evaluatePostfix } from './evaluatePostfix.mjs';

const equals = document.getElementById('equals');
const answer = document.getElementById('answer');

const startCalc = () => {
	const previousState = getState();

	const updatedState = {
		...previousState,
		equation: [...previousState.equation, previousState.currentInput],
		currentInput: '',
		original: [...previousState.equation, previousState.currentInput],
	};

	setState(updatedState);

	const postfix = convertToPostfix(updatedState.equation);

	console.log('postfix', postfix);

	const evaluation = evaluatePostfix(postfix);

	console.log('evaluation', evaluation);

	answer.innerHTML = evaluation;
};

equals.addEventListener('click', () => startCalc());

const state = getState();
if (state) updateView(state.equation.join(' '));

console.log();
