export default (object, keys) => {
	let result = object;

	for (const key of keys) {
		const isGet = Object.prototype.hasOwnProperty.call(result, key);
		if (!isGet && !result[key]) return null;

		result = result[key];
	}

	return result;
};