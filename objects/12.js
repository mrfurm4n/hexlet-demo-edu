import crc32 from 'crc-32';

const getIndex = (key) => {
	const hash = crc32.str(key);
	return Math.abs(hash) % 1000;
};

export const make = () => [];

export const set = (map, key, value) => {
	const index = getIndex(key);

	if (Array.isArray(map[index])) {
		const preventKey = map[index][0] ? map[index][0] : '';
		if (preventKey !== key) return false;
	}

	map[index] = [key, value];
	return true;
};

export const get = (map, key, defaultValue = null) => {
	const index = getIndex(key);

	if (!Array.isArray(map[index])) return defaultValue;

	const preventKey = map[index][0];
	if (preventKey !== key) return defaultValue;

	return map[index][1];
};