function fibs(n) {
	const array = [];

	for (let i = 0; i < n; i++) {
		if (i < 2) {
			array.push(i);
			continue;
		}

		array.push(array[i - 1] + array[i - 2]);
	}

	return array;
}

function fibsRec(n) {
	if (n === 0) return [0];
	if (n === 1) return [0, 1];

	const arr = fibsRec(n - 1);
	return [...arr, arr[n - 1] + arr[n - 2]];
}
