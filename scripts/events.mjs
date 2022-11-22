import {
	addInput,
	addPlusMinus,
	addOperator,
	handleReset,
	handlePercent,
	handleUndo,
	handleDecimal,
} from './functions.mjs';

const inputs = document.querySelectorAll('.input');
const operators = document.querySelectorAll('.operator');
const plusMinus = document.getElementById('plusMinus');
const reset = document.getElementById('reset');
const percent = document.getElementById('percent');
const undo = document.getElementById('undo');
const decimal = document.getElementById('decimal');

inputs.forEach((input) => {
	input.addEventListener('click', (e) => addInput(e));
});

operators.forEach((operator) => {
	operator.addEventListener('click', (e) => addOperator(e));
});

reset.addEventListener('click', handleReset);

plusMinus.addEventListener('click', addPlusMinus);

percent.addEventListener('click', handlePercent);

undo.addEventListener('click', handleUndo);

decimal.addEventListener('click', (e) => handleDecimal(e));
