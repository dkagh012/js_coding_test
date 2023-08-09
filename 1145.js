let fs = require("fs");
var input = require("fs").readFileSync("example.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputArr = [];
for (let i = 0; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}
console.log(inputArr[0].length);
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < inputArr[0].length; j++) {}
}

/*

다섯 개의 자연수가 있다. 
이 수의 적어도 대부분의 배수는 위의 수 중 
적어도 세 개로 나누어 지는 가장 작은 자연수이다.

서로 다른 다섯 개의 자연수가 주어질 때, 
적어도 대부분의 배수를 출력하는 프로그램을 작성하시오.



*/
