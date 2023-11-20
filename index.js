'use strict';

function capitalize(inputText = null) {
	if (typeof inputText !== 'string') {
		throw Error('Invalid Input Error: Must be a string');
	}

	inputText = inputText.replace(/\s+/g, '');
	return inputText.slice(0, 1).toUpperCase() + inputText.slice(1).toLowerCase();
}

function reverseString(inputText) {
	if (typeof inputText !== 'string') {
		throw Error('Invalid Input Error: Must be a string');
	}

	return inputText.split('').reverse().join('');
}

const calculator = {
	add: (num1, num2) => {
		if (typeof num1 !== 'number' || typeof num2 !== 'number') {
			throw Error('Invalid Input Error: Must be numbers');
		}
		return num1 + num2;
	},
	subtract: (num1, num2) => {
		if (typeof num1 !== 'number' || typeof num2 !== 'number') {
			throw Error('Invalid Input Error: Must be numbers');
		}
		return num1 - num2;
	},
	multiply: (num1, num2) => {
		if (typeof num1 !== 'number' || typeof num2 !== 'number') {
			throw Error('Invalid Input Error: Must be numbers');
		}
		return num1 * num2;
	},
	divide: (num1, num2) => {
		if (typeof num1 !== 'number' || typeof num2 !== 'number') {
			throw Error('Invalid Input Error: Must be numbers');
		} else if (num2 === 0) throw Error('Invalid Input Error: division by zero');
		return num1 / num2;
	},
};

export {
	capitalize,
	reverseString,
	calculator,
};
