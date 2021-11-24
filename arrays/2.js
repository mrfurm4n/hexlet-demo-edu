export const swap = (array) => {
	if (array.length < 2) return array;

	const first = array[0];
	const last = array[array.length - 1];

	array[0] = last;
	array[array.length - 1] = first;

	return array;
}