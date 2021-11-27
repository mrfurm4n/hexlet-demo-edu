export default (text, stopWords) => {
	const result = [];
	const words = text.split(' ');

	for (const word of words) {
		result.push(stopWords.includes(word) ? '$#%!' : word);
	}

	return result.join(' ');
}