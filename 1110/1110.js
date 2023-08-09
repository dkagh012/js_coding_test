let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(i);

/*
0보다 크거나 같고, 99보다 작거나 같은 점수가 주어질 때 다음과 같은 연산을 할 수 있다.
먼저 주어진 수가 10보다 작다면 0을 붙여 두자리수를 만들고
각 자리의 숫자를 더한다.
그 다음 , 주어진 수가 가장 오른쪽 수와 앞에서 구한합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.

주어진 수의 가장 오른쪽 자리 수와 
앞에서 구한 합의 가장 오른쪽 자리 수
를 이어 붙여 새로운 수를 만든다
55
5+5=10 50
5 + 0 = 5
*/
