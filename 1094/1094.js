const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const solve = (input) => {
  // 입력을 숫자로 변환하고 'target' 변수에 할당합니다.
  let target = +input;
  // 'cnt' 변수를 초기화하여 'target'의 이진 표현에서 설정된 비트(1)의 개수를 추적합니다.
  let cnt = 0;

  // 'target'이 0보다 큰 동안 계속 루프합니다.
  while (target > 0) {
    // 'target'의 가장 끝 비트(최하위 비트)가 1인지 확인합니다 (비트 AND 연산을 사용).
    if (target & 1) {
      // 만약 최하위 비트가 1이면, 'cnt'를 증가시킵니다.
      cnt++;
    }

    // 'target'를 1 비트 오른쪽으로 시프트하여 최하위 비트를 제거합니다.
    target >>= 1;
  }

  // 입력 숫자의 이진 표현에서 설정된 비트의 개수를 출력합니다.
  console.log(cnt);
}

// 'input' 값을 가지고 'solve' 함수를 호출합니다.
solve(input);


