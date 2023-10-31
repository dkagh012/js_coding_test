const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1629/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(BigInt);

const [A, B, C] = input;

// /*
// A*B%C = (A%C)*(B%C)%C

// B가 짝수 라면

// A^B승은 = (A^(B/2)) *(A^(B/2))


// A*B%C = ((A^(B / 2) % C) * (A^(B / 2) % C)) % C

// B가 홀수 일떄는
// (A^(B/2)) *(A^(B/2)) *A

// A*B%C = ((A^(B / 2) % C) * (A^(B / 2) % C)) *(A%C) %C
// */
const solve = (power) => {
  if (power === 1n) {
    return A % C;
  }
  // B를 2로 나눈 값을 입력하여 함수를 재귀적으로 호출한다.
  const half = solve(power / 2n) % C;

  if (power % 2n === 0n) {
    return half * half % C
  }
  return (half * half) * (A % C) % C
}

console.log(solve(B).toString())