const getSameParity = (array) => {
	if (array.length === 0) return [];

	const result = [];
	const firstValue = Math.abs(array[0]);

	for (const value of array) {
		if (Math.abs(value) % 2 === firstValue % 2) result.push(value);
	}

	return result;
}

export default getSameParity;