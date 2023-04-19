import {
	addInput,
	addPlusMinus,
	addOperator,
	handleReset,
	handlePercent,
	handleUndo,
	handleDecimal,
	handleExponent,
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
	input.addEventListener('click', addInput);
});

operators.forEach((operator) => {
	operator.addEventListener('click', addOperator);
});

reset.addEventListener('click', handleReset);

plusMinus.addEventListener('click', addPlusMinus);

percent.addEventListener('click', handlePercent);

undo.addEventListener('click', handleUndo);

decimal.addEventListener('click', handleDecimal);

xSquared.addEventListener('click', handleExponent);

xCubed.addEventListener('click', handleExponent);

xPowerY.addEventListener('click', handleXPowerY);

brackets.forEach((bracket) => {
	bracket.addEventListener('click', handleBracket);
});
