// A helper function used to convert an incoming string to an array. As the operators are added surrounded by whitespace, it is easy to split on the space and return the array. Regex is used to check for only legal chars: 0-9, ., +, /, -, *
const convertToArray = (str) => {
	const regex = /^(?:(?!_)[\d\s\/\-\+\*\.])*$/g;

	const isValid = regex.test(str);

	if (!isValid) return false;

	return str.split(' ');
};

export { convertToArray };
