// Greeting function
function greet(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Conversion function
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Math operation function (Factorial)
function calculateFactorial(number) {
    if (number === 0 || number === 1) return 1;
    return number * calculateFactorial(number - 1);
}


// Advanced function: Calculate age from date of birth
function calculateAge(dob) {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Exporting functions using CommonJS syntax
module.exports = {
    greet,
    convertCelsiusToFahrenheit,
    calculateFactorial,
    calculateAge,
};



