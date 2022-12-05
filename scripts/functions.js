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
	answer.innerHTML = value.toLocaleString('en-UK');
};

const addInput = (e) => {
	const previousState = getState();

	if (previousState.numberLock) return;

	const currentValue = Number(e.target.innerText);

	// XPowerY - removing any hold they may have been applied.
	document.getElementById('xPowerY').classList.remove('hold');

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
		currentInput: (previousState.currentInput += Number(currentValue)),
		operatorLock: false,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
};

const addOperator = (e) => {
	const previousState = getState();

	const operator = e.target.innerText;

	// If .operatorLock is true, then we refuse the input as the previous input must have been an operator.
	if (operator === undefined || previousState.operatorLock) return;

	const updatedState = {
		...previousState,
		equation: [...previousState.equation, previousState.currentInput, operator],
		currentInput: '',
		operatorLock: true,
		decimalLock: false,
		numberLock: false,
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
	const { currentInput } = getState();

	const ans = +currentInput / 100;

	showAnswer(ans);
};

const handleUndo = () => {
	alert('Coming Soon!');
};

const handleDecimal = (e) => {
	const previousState = getState();

	const decimal = e.target.innerText;

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

const handleExponent = (e) => {
	const { currentInput } = getState();

	const operator = e.target.innerText;

	const answer = operatorMap[operator](currentInput);

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
	const previousState = getState();

	const currentValue = e.target.innerText;

	if (currentValue === '(') {
		const updatedState = {
			...previousState,
			equation: [...previousState.equation, currentValue],
		};
		setState(updatedState);
		updateView(updatedState.equation.join(''));
	}

	if (currentValue === ')') {
		const updatedState = {
			...previousState,
			equation: [
				...previousState.equation,
				previousState.currentInput,
				currentValue,
			],
			currentInput: '',
		};
		setState(updatedState);
		updateView(updatedState.equation.join(''));
	}
	// alert('Coming soon!');
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
	handleExponent,
	handleXPowerY,
	handleBracket,
};
