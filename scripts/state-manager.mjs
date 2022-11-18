// State Manager

// Initial State
const initialState = {
	current: [],
	currentString: '',
	previousString: '',
	original: '',
};

// Setter
const setState = (state) => {
	localStorage.setItem('calcState', JSON.stringify(state));
};

// Getter
const getState = () => {
	const state = localStorage.getItem('calcState');

	if (state) return JSON.parse(state);

	return initialState;
};

export { setState, getState, initialState };
