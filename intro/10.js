const isPrime = (num) => {
	if (num === 1 || num <= 0) return false;

	for (let count = 2; count < num; count++) {
		if (num % count === 0) return false;
	}

	return true;
}