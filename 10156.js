// var input = require('fs').readFileSync('/dev/stdin').toString().split(' '),
var input = require('fs').readFileSync('example.txt').toString().split('\n');
a = input[0];
b = input[1];
c = input[2];



let i = a * b;
let f = i - c;
let sum = 0;
if (f > 0) {
  sum = f;
}
sum = 0;



console.log(sum);