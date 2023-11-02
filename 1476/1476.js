const readline = require("readline"); // readline 모듈을 불러옵니다.

const rl = readline.createInterface({ // readline 인터페이스를 생성합니다.
  input: process.stdin, // 입력은 표준 입력 스트림을 사용합니다.
  output: process.stdout, // 출력은 표준 출력 스트림을 사용합니다.
});

rl.once("line", (line) => { // "line" 이벤트를 한 번만 대기하고, 입력을 처리하는 콜백 함수를 정의합니다.
  const [E, S, M] = line.split(" ").map(Number); // 입력된 문자열을 공백으로 분할하고 각 요소를 숫자로 변환하여 E, S, M 변수에 저장합니다.

  // 중국 나머지 정리를 활용한 해결
  let count = 1; // 카운트 변수를 초기화합니다.
  while (true) { // 무한 루프를 시작합니다.
    if (
      count % 15 === E % 15 && // E와 15의 나머지가 같고
      count % 28 === S % 28 && // S와 28의 나머지가 같으며
      count % 19 === M % 19    // M와 19의 나머지가 같으면
    ) {
      console.log(count); // 조건을 만족하는 경우 현재 count를 출력합니다.
      rl.close(); // readline 인터페이스를 닫아서 프로그램을 종료합니다.
      return; // 함수 실행을 종료합니다.
    }
    count++; // 조건을 만족하지 않으면 count를 증가시킵니다.
  }
});
