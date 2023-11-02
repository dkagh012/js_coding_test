const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const length = input[0];
let numbers = input[1].split(" ").map(x => Number(x));
// 문자열을 숫자열로 바꾸기
let max = numbers[0];
let min = numbers[0];

for (let i = 0; i < length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(`${min} ${max}`);