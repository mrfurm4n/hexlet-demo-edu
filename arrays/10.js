export default (scores) => {
	let canadaResult = 0;
	let ussrResult = 0;

	for (const score of scores) {
		const canadaScore = score[0];
		const ussrScore = score[1];

		canadaResult += canadaScore > ussrScore ? 1 : 0;
		ussrResult += canadaScore < ussrScore ? 1 : 0;
	}

	if (canadaResult === ussrResult) return null;
	return canadaResult > ussrResult ? 'canada' : 'ussr';
}