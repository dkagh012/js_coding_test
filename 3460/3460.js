const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const iter = input[0];

for (let i = 1; i <= iter; i++) {
  const binary = input[i].toString(2);
  const binaryArr = [...binary].reverse();
  // binary 문자열을 배열로 만드는 과정

  let ans = [];

  for (let j = 0; j < binaryArr.length; j++) {
    if (binaryArr[j] === "1") {
      ans.push(j);
    }
  }

  console.log(ans.join(" "));
}