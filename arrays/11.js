const buildDefinitionList = (array) => {
	if (array.length === 0) return '';

	const result = [];
	for (const item of array) {
		result.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
	}

	return `<dl>${result.join('')}</dl>`;
}

export default buildDefinitionList;