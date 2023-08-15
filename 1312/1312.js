// var input = require("fs").readFileSync("example.txt").toString().split("\n");
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


let inputArr = [];
for (let i = 0; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}
let a = inputArr[0][0];
let b = inputArr[0][1];
let n = inputArr[0][2];

let result = a % b;

for (let i = 0; i < n - 1; i++) {
  result *= 10;
  result %= b;
};
result *= 10;

console.log(Math.floor(result / b));
