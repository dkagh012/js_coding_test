var input = require('fs').readFileSync('/dev/stdin').toString().split(' '),
  // var input = require('fs').readFileSync('example.txt').toString().split('\n');
  a = input[0];
str = [];
for (let i = 0; i < a; i++) {
  for (let j = 0; j <= a - i; j++) {
    str += " ";
  }
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);