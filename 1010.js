const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync('example.txt').toString().split('\n');
let inputArr = [];
for (let i = 0; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}
solution(inputArr)

function solution(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    console.log(n);
    console.log(m);
    const memo = Array.from(Array(30), () => Array(30).fill(0));
    // memo라는 2차원 배열을 선언합니다. 
    // memo 배열은 이전 계산 결과를 저장하기 위한 용도로 사용될 것입니다. 배열의 크기는 30x30으로 설정되어 있습니다.
    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) {
          memo[i][j] = 1;
        } else if (i === 1) {
          memo[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += memo[i - 1][k];
          }
          memo[i][j] = temp;
        }
      }
    }
    answer.push(memo[n][m]);
  });
  // console.log(answer.join("\n"));
}