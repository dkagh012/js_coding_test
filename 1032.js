const fs = require("fs");
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' '),
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = +input[0];
const inputFileName = [];

for (let i = 1; i <= N; i++) {
  inputFileName.push(input[i]);
}

// 3
// config.sys
// config.inf
// configures
// 입력값 변홤
solution(inputFileName);

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr[0].length; i++) {
    let num = 0;
    let temp = arr[0][i]
    for (let j = 0; j < arr.length; j++) {
      if (temp !== arr[j][i]) {
        answer.push("?");
        break;
      } else {
        num++;
      }
      if (num === arr.length) answer.push(temp);
    }
  }
  console.log(answer.join(""));
}

// 1번 for문은 파일 이름 문자열의 길이이다. 문자열의 길이만큼 for문을 반복한다.
// 비교하는 기준이 되는 문자 저장 배열이다.
// 함수 매개변수로 넘어온 배열의 길이가 비교하는 문자 한 줄이다. 문자의 줄 만큼 for문을 반복한다.
// 기준 문자열(temp)이 arr에 들어있는 문자열과 비교하여 하나라도 다르면 '?'를 push하고 모두 같으면 기준문자열(temp)를 push한다.
// answer배열을 join으로 합하여 정답을 출력한다.