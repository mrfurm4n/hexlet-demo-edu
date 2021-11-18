const reverse = (str) => {
	let count = str.length - 1;
	let result = '';

	while (count >= 0) {
		result = result + str[count];
		count = count - 1;
	}

	return result;
}