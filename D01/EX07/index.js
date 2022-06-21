function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function moduloEx7() {
  let number = getRandomInt(101);
  let comparer = getRandomInt(101);
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

function moduloEx7();
