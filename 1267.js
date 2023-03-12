let fs = require("fs");
var input = require('fs').readFileSync('example.txt').toString().split('\n');
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let time = input[1].split(' ').map();
let m = 0;
let y = 0;

for (let i = 0; i < time.length; i++) {
  y += time[i] % 30 === 0 ? (time[i] / 30 + 1) * 10 : Math.ceil(time[i] / 30) * 10;
  m += time[i] % 60 === 0 ? (time[i] / 60 + 1) * 15 : Math.ceil(time[i] / 60) * 15;
}

if (m === y) console.log("Y M " + m);
else if (m > y) console.log("Y " + y);
else console.log("M " + m);



//  Y  영식 0~30 은 10원 30 ~ 59 20원
//  M  민식 0~60 은 15원 60초에서 119는 30원


// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
