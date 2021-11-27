export const flatten = (array) => {
	let result = [];

	for (const item of array) {
		if (Array.isArray(item)) {
			result = [...result, ...item];
		} else {
			result = [...result, item];
		}
	}

	return result;
};