import { length, toUpperCase } from './strings.js';

export default (str) => {
	let result = '';

	for (let i = 0; i < length(str); i++) {
		result += (str[i - 1] === ' ' || i === 0) ? toUpperCase(str[i]) : str[i];
	}

	return result;
}