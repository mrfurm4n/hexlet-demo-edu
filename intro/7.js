const smallestDivisor = (num) => {
	if (num === 1) return num;

	const iter = (acc) => {
		if (num % acc === 0 || num === acc) return acc;

		return iter(acc + 1);
	};

	return iter(2);
};