export default (array) => {
	if (array.length === 0) return 0;

	let sum = 0;
	for (let i = 0; i < array.length; i += 1) {
		sum += (array[i] % 3 === 0) ? array[i] : 0;
	}

	return sum;
}