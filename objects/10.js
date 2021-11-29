export default (name, params) => ({
	name,
	state: 'moderating',
	createdAt: Date.now(),
	...params,
});