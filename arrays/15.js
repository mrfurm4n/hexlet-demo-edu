export default (array) => {
	if (array.length === 0) return [];

	const stepsCount = array.length - 1;
	let swapped = null;

	do {
		swapped = false;

		for (let i = 0; i < stepsCount; i += 1) {
			if (array[i] > array[i + 1]) {
				const temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;

				swapped = true;
			}
		}
	} while (swapped);

	return array;
}