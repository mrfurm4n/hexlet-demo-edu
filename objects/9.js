import isObject from 'lodash/isObject.js';

const cloneDeep = (object) => {
	const result = {};
	const entries = Object.entries(object);

	for (const [key, value] of entries) {
		result[key] = isObject(value) ? cloneDeep(value) : value;
	}

	return result;
};

export default cloneDeep;