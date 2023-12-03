const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];

function solution(n) {
  n = n.replace(/XXXX/g, "AAAA");
  n = n.replace(/XX/g, "BB");
  n = n.split("").includes("X") ? -1 : n;
  return n;
}

console.log(solution(n));
