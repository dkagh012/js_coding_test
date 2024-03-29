let fs = require("fs");
var input = require("fs").readFileSync("example.txt").toString().toLowerCase();
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);




let isSame = false;


for (let j = 0; j < 26; j++) {
  if (result[j] > max && index != j) {
    isSame = true;
    break;
  }
}


console.log(isSame ? "?" : String.fromCharCode(index + 65));


/*
알파벳 대소문자로 된 단어가 주어지면, 
이 단어에서 
가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
단, 대문자와 소문자를 구분하지 않는다.

*/