function modulo(number1, number2) {
	let result;
	if (number1 > number2) {
		result = `The number ${number1} is bigger than ${number2}`;
	}
	 if (number1 > number2 && number1 % number2 !== 0) {
		console.log(`The modulo of ${number1} % ${number2} is ${number1 % number2}`);
		console.log(`The number ${number1} is bigger than ${number2}`);
	}
	 if (number1 < number2) {
		result = `The number ${number1} is less than ${number2}`;
	} 
	if (number1 === number2) {
		result = `The number ${number1} is equal to ${number2}`;
	}
	console.log(result);
	}
  

// Do not remove or change this line, or the tests won't work
export { modulo };
