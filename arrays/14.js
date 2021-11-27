export default (string) => {
	if (string === '') return 0;

	const result = [];
	const symbols = string.split('');

	for (const item of symbols) {
		if (!result.includes(item)) result.push(item);
	}

	return result.length;
};