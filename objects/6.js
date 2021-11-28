import _ from 'lodash';

export default (object, picks) => {
	const result = {};
	
	for (const key of picks) {
		if (_.has(object, key)) result[key] = object[key];
	}

	return result;
};
