export default (array, valute) => {
	if (array.length === 0) return null;

	let sum = 0;
	for (const value of array) {
		const currentValute = value.slice(0, 3);
		const currentValue = value.slice(4);

		if (currentValute !== valute) continue;

		sum += Number(currentValue);
	}

	return sum;
}