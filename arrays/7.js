export default (array) => {
	if (array.length === 0) return null;

	let sum = 0;
	for (const value of array) {
		sum += value;
	}

	return sum / array.length;
}