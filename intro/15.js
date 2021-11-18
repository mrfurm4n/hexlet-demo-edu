import { length } from './strings.js';

export default (num) => {
	const sum = (num) => {
		const str = String(num);
		let result = 0;

		for (let i = 0; i < length(str); i++) {
			result += Number(str[i]);
		}

		return String(result);
	}

	const iter = (num) => {
		if (length(num) === 1) return Number(num);
		return iter(sum(num));
	}

	return iter(String(num));
}
