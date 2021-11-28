export default (sentence) => {
	if (sentence.length === 0) return {};

	const result = {};
	const words = sentence.split(' ');

	for (const word of words) result[word.toLowerCase()] = (result[word.toLowerCase()] ?? 0) + 1;

	return result;
};