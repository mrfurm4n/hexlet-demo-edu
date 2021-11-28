export default (object1, object2) => {
	const keys = ['name', 'state', 'website'];

	for (const key of keys) if (object1[key] !== object2[key]) return false;

	return true;
};