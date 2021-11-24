export default (array, prefix) => {
	if (prefix === '') return array;

	const result = [];

	for (let i = 0; i < array.length; i += 1) {
		result[i] = `${prefix} ${array[i]}`;
	}

	return result;
}