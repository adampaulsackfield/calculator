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
	const previousState = getState();

	if (e.target.dataset.value === undefined) return;

	const updatedState = {
		...previousState,
		currentInput: (previousState.currentInput += e.target.dataset.value),
		operatorLock: false,
	};

	setState(updatedState);
	updateView(updatedState.currentInput);
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

export {
	addInput,
	addOperator,
	addPlusMinus,
	updateView,
	handleReset,
	handlePercent,
	handleUndo,
	handleDecimal,
};
