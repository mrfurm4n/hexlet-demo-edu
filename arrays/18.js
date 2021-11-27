const getDistance = ([x1, y1], [x2, y2]) => {
	const xs = x2 - x1;
	const ys = y2 - y1;

	return Math.sqrt(xs ** 2 + ys ** 2);
};

export const getTheNearestLocation = (locations, point) => {
	if (locations.length === 0) return null;

	const [firstLocation] = locations;
	const [, firstLocationPoint] = firstLocation;
	let nearestDistance = getDistance(firstLocationPoint, point);

	let resultLocation = [];

	for (const [locationName, locationPoint] of locations) {
		const currentDistance = getDistance(locationPoint, point);

		if (nearestDistance > currentDistance) {
			nearestDistance = currentDistance;
			resultLocation = [locationName, locationPoint];
		}
	}

	return resultLocation;
}