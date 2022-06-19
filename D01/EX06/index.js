function moduloEx6(number, comparer) {
	let result;

	if (number > comparer && number % comparer !== 0) {
		result = `The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${number % comparer}`;
	} else if (number > comparer) {
		result = `The number ${number} is bigger than ${comparer}`;
	} else if (number === comparer) {
		result = `The number ${number} is equal to ${comparer}`;
	} else {
		result = `The number ${number} is less than ${comparer}`;
	}
	const modulo = document.getElementById('output');
	modulo.innerText = result;
}

moduloEx6(9, 4);