// A helper function used to convert an incoming string to an array. As the operators are added surrounded by whitespace, it is easy to split on the space and return the array.
const convertToArray = (str) => {
	// TODO - Add some logic to sanitize inputs.
	const regex = /([0-9*/\\+-\s])/g;

	console.log('test', regex.test(str));

	return str.split(' ');
};

export { convertToArray };
