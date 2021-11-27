export const getMax = (array) => {
	if (array.length === 0) return null;

	let [max, ...numbers] = array;
	for (const item of numbers) if (max < item) max = item;

	return max;
};