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
        // 이중 반복문을 사용하여 memo 배열을 채웁니다. 
        // 외부 반복문은 i가 1부터 n까지 증가하면서 반복하고, 내부 반복문은 j가 i부터 m까지 증가하면서 반복합니다.
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
        // 위의 두 조건문에 해당하지 않는 경우, 즉 일반적인 경우에는 temp라는 변수를 선언하고 0으로 초기화합니다. 
        // 그리고 다시 한 번 반복문을 사용하여 k가 1부터 j보다 작은 동안 반복하면서 temp에 이전 계산 결과인 memo[i-1][k]를 더해줍니다. 
        // 이는 k를 마지막으로 하는 i-1자리 수를 만들 수 있는 경우의 수를 모두 더한 것입니다.
      }
    }
    // 내부 반복문이 종료되면 memo[i][j]에 temp 값을 할당합니다.
    answer.push(memo[n][m]);
  });
  // console.log(answer.join("\n"));
}