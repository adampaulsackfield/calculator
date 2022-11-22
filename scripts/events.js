import {
	addInput,
	addPlusMinus,
	addOperator,
	handleReset,
	handlePercent,
	handleUndo,
	handleDecimal,
	handleExponents,
	handleXPowerY,
	handleBracket,
} from './functions.js';

const inputs = document.querySelectorAll('.input');
const operators = document.querySelectorAll('.operator');
const plusMinus = document.getElementById('plusMinus');
const reset = document.getElementById('reset');
const percent = document.getElementById('percent');
const undo = document.getElementById('undo');
const decimal = document.getElementById('decimal');
const xSquared = document.getElementById('xSquared');
const xCubed = document.getElementById('xCubed');
const xPowerY = document.getElementById('xPowerY');
const brackets = document.querySelectorAll('.bracket');

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

xSquared.addEventListener('click', (e) => handleExponents(e));

xCubed.addEventListener('click', (e) => handleExponents(e));

xPowerY.addEventListener('click', handleXPowerY);

brackets.forEach((bracket) => {
	bracket.addEventListener('click', (e) => handleBracket(e));
});
