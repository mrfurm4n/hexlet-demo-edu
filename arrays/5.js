export const reverse = (array) => {
	const lastIndex = array.length - 1;
	const middleIndex = lastIndex / 2;

	for (let i = 0; i <= middleIndex; i += 1) {
		const first = array[i];
		const last = array[lastIndex - i];

		array[i] = last;
		array[lastIndex - i] = first;
	}

	return array;
}