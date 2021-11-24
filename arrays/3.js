export default (array, index, value = null) => {
	if (index < array.length && index >= 0) return array[index];
	return value;
}