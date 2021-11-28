export default (website) => {
	const scheme = website.startsWith('https') ? 'https' : 'http';
	const name = website.replace(`${scheme}://`, '');

	return { scheme, name };
};