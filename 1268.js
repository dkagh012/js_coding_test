var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [A, B] = input[0].split(" ").map(Number);
let sum = 0;
const arr = [1001];
let cnt = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < i; j++) {
    if (cnt === 1000) {
      break;
    }
    arr[cnt] = i;
    cnt++;
  }
}

for (let i = A - 1; i < B; i++) {
  sum += arr[i];
}
console.log(sum)