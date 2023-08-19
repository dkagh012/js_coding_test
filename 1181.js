const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input)

function solution(inputArr) {
  let answer = [];
  let arr = inputArr;

  arr.shift(); // 배열에 첫번쨰 값 삭제

  arr = Array.from(new Set(arr)) //new Set(element) 중복함수를 제거하는 명령어이다

  let sorted = arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    }
  })
  // sort는 그냥 sort() 로 사용하면 사전 순으로 정렬하지만 콜백함수를 넣어주면 콜백 함수의 내용으로 정렬한다
  // a,b는 단어를 받아오고
  // a,b는 길이가 같지 않을 때 a.length - b.length 하는 데 이것은 문자열 길이 기순으로 오름차순하는 것이다
  console.log(sorted[sorted.length - 1].length);
  for (let i = 1; i <= sorted[sorted.length - 1].length; i++) { // 같은 길이에서 사전순으로 정렬
    let temp = sorted.filter((el) => el.length === i);
    answer.push(...temp.sort());
  }
  // 그리고 나서 길이가 같은 단어를 sort() 로 사전순으로 정렬하고 answer에 추가해준다
  // 추가된 answer를 한줄씩 출력하면 된다.

  for (let word of answer) {
    // console.log(word);
  }
}