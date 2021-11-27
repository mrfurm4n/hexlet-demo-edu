const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (string) => {
	const stack = [];

	for (let i = 0; i < string.length; i += 1) {
		const item = string[i];

		if (openingSymbols.includes(item)) stack.push(item);

		if (closingSymbols.includes(item)) {
			const lastItemStack = stack[stack.length - 1];

			const closingIndex = closingSymbols.indexOf(item);
			const openingIndex = openingSymbols.indexOf(lastItemStack);

			if (closingIndex !== openingIndex) return false;
			stack.pop();
		}
	}

	return stack.length === 0;
};

export default isBracketStructureBalanced;