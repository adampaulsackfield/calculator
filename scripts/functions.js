import { operatorMap } from './maps.js';
import { setState, getState, initialState } from './state-manager.js';

const currentCalculation = document.getElementById('currentCalculation');
const answer = document.getElementById('answer');

const updateView = (value, clear = false) => {
	if (clear) {
		currentCalculation.innerHTML = '';
		answer.innerHTML = 0;
	}

	currentCalculation.innerHTML = value;
};

const showAnswer = (value) => {
	answer.innerHTML = value;
};

const addInput = (e) => {
	const previousState = getState();

	const currentValue = e.target.dataset.value;

	// XPowerY - removing any hold they may have been applied.
	document.getElementById('xPowerY').classList.remove('hold');

	if (currentValue === undefined) {
		alert('undefined'); // ! TODO DEBUGGING
		return;
	}

	// Check for XPowerY - If .running is true then the button has already been pressed and we can get the first value .value and the currentValue will be the e.target.dataset.value, in this case it becomes the exponent. Using the operator map we can use the xPowerY function.
	if (previousState.xPowerY.running) {
		const answer = operatorMap['xPowerY'](
			previousState.xPowerY.value,
			currentValue
		);
		showAnswer(answer);
		setState(initialState);
		return;
	}

	const updatedState = {
		...previousState,
		currentInput: (previousState.currentInput += currentValue),
		operatorLock: false,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
};

const addOperator = (e) => {
	const previousState = getState();

	const operator = e.target.dataset.value;

	// If .operatorLock is true, then we refuse the input as the previous input must have been an operator.
	if (operator === undefined || previousState.operatorLock) return;

	const updatedState = {
		...previousState,
		equation: [...previousState.equation, previousState.currentInput, operator],
		currentInput: '',
		operatorLock: true,
		decimalLock: false,
	};

	setState(updatedState);
	updateView(updatedState.equation.join(' '));
};

const addPlusMinus = () => {
	const previousState = getState();

	const updatedState = {
		...previousState,
		currentInput: -previousState.currentInput,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
};

const handleReset = () => {
	setState(initialState);
	updateView('', true);
};

const handlePercent = () => {
	const previousState = getState();

	const ans = +previousState.currentInput / 100;
	showAnswer(ans);
};

const handleUndo = () => {
	const previousState = getState();

	previousState.equation.pop();

	const updatedState = {
		...previousState,
		equation: previousState.equation,
	};

	setState(updatedState);
	updateView(updatedState.equation);
};

const handleDecimal = (e) => {
	const previousState = getState();

	const decimal = e.target.dataset.value;

	// If .decimalLock is true, then we refuse the input as the previous input must have been an decimal.
	if (decimal === undefined || previousState.decimalLock) return;

	const updatedState = {
		...previousState,
		currentInput: (previousState.currentInput += decimal),
		operatorLock: false,
		decimalLock: true,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
};

const handleExponents = (e) => {
	const previousState = getState();

	const currentValue = e.target.dataset.value;

	const answer = operatorMap[currentValue](previousState.currentInput);

	showAnswer(answer);
};

const handleXPowerY = () => {
	const previousState = getState();

	const updatedState = {
		...previousState,
		xPowerY: { running: true, value: previousState.currentInput },
	};

	// Show button pressed
	document.getElementById('xPowerY').classList.add('hold');

	setState(updatedState);
};

const handleBracket = (e) => {
	alert('Coming soon!');
};

export {
	addInput,
	addOperator,
	addPlusMinus,
	updateView,
	handleReset,
	handlePercent,
	handleUndo,
	handleDecimal,
	handleExponents,
	handleXPowerY,
	handleBracket,
};
