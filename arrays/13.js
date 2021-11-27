export default (arr1, arr2) => {
	let result = 0;

	const uniqArr1 = _.uniq(arr1);
	const uniqArr2 = _.uniq(arr2);

	for (const item1 of uniqArr1) {
		for (const item2 of uniqArr2) {
			if (item1 === item2) result += 1;
		}
	}

	return result;
}