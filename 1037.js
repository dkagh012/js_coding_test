const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 입력 파일을 읽어옵니다.
var input = fs.readFileSync('example.txt').toString().split('\n');
// 입력을 처리하기 위한 배열을 선언합니다.
let inputArr = [];
// 입력을 배열로 변환합니다.
for (let i = 0; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}
// measure 함수를 호출하여 결과를 출력합니다.
console.log(measure(inputArr));
// 입력 배열을 이용하여 N 값을 계산하는 함수입니다.
function measure(Array) {
  // 주어진 배열(Array)의 두 번째 요소 (실제 약수들) 중에서 가장 작은 값과 가장 큰 값을 찾습니다.
  const minDivisor = Math.min(...Array[1]);
  const maxDivisor = Math.max(...Array[1]);

  // 가장 작은 값과 가장 큰 값을 곱하여 N 값을 계산하고 반환합니다.
  return minDivisor * maxDivisor;
}