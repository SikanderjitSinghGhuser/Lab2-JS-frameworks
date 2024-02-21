
const utils = require('./utils');

// Calling functions from the utilities file
utils.greet('Sikanderjit', 'Singh');
console.log(`10°C to Fahrenheit: ${utils.convertCelsiusToFahrenheit(10)}°F`);
console.log(`Factorial of 5: ${utils.calculateFactorial(5)}`);
const age = utils.calculateAge('1990-01-01'); // Replace with any date of birth
console.log(`Age: ${age}`);
