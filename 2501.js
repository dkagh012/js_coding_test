const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, M] = input;
let count = 0;
let sum = 0;
for (let i = 0; i <= N; i++) {
  if (N % i === 0) {
    count++;
  }
  if (M == count) {
    sum = i;
    break;
  }
}
console.log(sum);