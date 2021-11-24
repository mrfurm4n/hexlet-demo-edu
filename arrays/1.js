export const getWeekends = (type) => {
	if (type === 'short') return ['sat', 'sun'];
	return ['saturday', 'sunday'];
}