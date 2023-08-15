const input = require('fs').readFileSync('example.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = [];
for (let i = 1; i <= N; i++) {
  map.push(input[i].split(''));
}

const row = new Array(N).fill(false);
const col = new Array(M).fill(false);


let c = 0;
let r = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 'X') {
      col[j] = row[i] = true;
    }
  }
}
console.log(col);
console.log(row);

for (let i = 0; i < N; i++) {
  if (!row[i]) r++;
}

for (let i = 0; i < M; i++) {
  if (!col[i]) c++;
}

console.log(Math.max(c, r));
