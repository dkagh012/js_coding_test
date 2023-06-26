// var input = require('fs').readFileSync('/dev/stdin').toString().split(' '),
var input = require('fs').readFileSync('example.txt').toString().split('\n');
console.log(input);
let a = input[0];
let b = input[1];
let n = input[2];

let result = a / b;
let decimalPart = result.toString().split('.')[1];  // Extract the decimal part
let nthDigit = decimalPart.charAt(n - 1);  // Extract the Nth digit after the decimal point
console.log(parseInt(nthDigit));  // Convert the digit to an integer and log it to the console
