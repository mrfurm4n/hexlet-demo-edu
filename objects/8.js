import _ from 'lodash';

export default (source, keys, data) => {
	const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
	return Object.assign(source, filteredData);
};