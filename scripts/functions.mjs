import { operatorMap } from './maps.mjs';
import { setState, getState, initialState } from './state-manager.mjs';

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
	document.getElementById('xPowerY').classList.remove('hold');
	const previousState = getState();

	if (e.target.dataset.value === undefined) return;

	// Check for XPowerY
	if (previousState.xPowerY.running) {
		const answer = operatorMap['xPowerY'](
			previousState.xPowerY.value,
			e.target.dataset.value
		);
		showAnswer(answer);
		setState(initialState);
		return;
	}

	const updatedState = {
		...previousState,
		currentInput: (previousState.currentInput += e.target.dataset.value),
		operatorLock: false,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
	console.log('state', updatedState);
};

const addOperator = (e) => {
	const previousState = getState();

	if (e.target.dataset.value === undefined || previousState.operatorLock)
		return;

	const updatedState = {
		...previousState,
		equation: [
			...previousState.equation,
			previousState.currentInput,
			e.target.dataset.value,
		],
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
	alert('This function is disabled at the moment.');
	return;
	const previousState = getState();

	if (e.target.dataset.value === undefined || previousState.decimalLock) return;

	const updatedState = {
		...previousState,
		currentInput: (previousState.currentInput += e.target.dataset.value),
		operatorLock: false,
		decimalLock: true,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
};

const handleExponents = (e) => {
	const previousState = getState();

	const answer = operatorMap[e.target.dataset.value](
		previousState.currentInput
	);

	showAnswer(answer);
};

const handleXPowerY = (e) => {
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

	const updatedState = {
		...previousState,
		equation: [
			...previousState.equation,
			previousState.currentInput !== ''
				? previousState.currentInput
				: e.target.dataset.value,
			,
			e.target.dataset.value,
		],
	};

	setState(updatedState);
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
