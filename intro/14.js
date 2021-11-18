import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
	let result = 0;

	for (let count = 0; count < length(str); count++) {
		if (toUpperCase(str[count]) == str[count] || str[count] === ' ') {
			result += 1;
		}
	}

	return result;
};


const compare = (first, second) => {
	const firstCount = bigLettersCount(first);
	const secondCount = bigLettersCount(second);

	if (firstCount > secondCount) return 1;
	if (firstCount < secondCount) return -1;
	return 0;
};

export const greaterThan = (first, second) => (
	compare(first, second) === 1);

export const lessThan = (first, second) => (
	compare(first, second) === -1);

export const isEqual = (first, second) => (
	compare(first, second) === 0);
