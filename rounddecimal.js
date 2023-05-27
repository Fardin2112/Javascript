// In JavaScript, you can round a number to two decimal places using the toFixed() method or the Math.round() function. Here's how you can use both approaches:
//Note that toFixed() returns a string
//Using toFixed() method:
let number = 3.14159;
let roundedNumber = number.toFixed(2);
console.log(roundedNumber); // Output: "3.14"


//Using Math.round() function:
let number2 = 3.14159;
let roundedNumber2 = Math.round(number2 * 100) / 100;
console.log(roundedNumber2); // Output: 3.14

