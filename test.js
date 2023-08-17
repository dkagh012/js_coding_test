const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the number of students (n): ", (n) => {
  const arr = new Array(1001).fill(0).map(() => new Array(6).fill(0));
  const cnt = new Array(1001).fill(0);

  // 입력 받기
  const inputStudentData = (studentIndex) => {
    if (studentIndex > n) {
      compareStudents();
      rl.close();
      return;
    }

    rl.question(`Enter data for student ${studentIndex} (5 grades separated by space): `, (input) => {
      const grades = input.split(" ").map(Number);
      arr[studentIndex] = [0, ...grades];
      inputStudentData(studentIndex + 1);
    });
  };

  // 학생 비교
  const compareStudents = () => {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= 5; k++) {
          if (arr[i][k] === arr[j][k]) {
            cnt[i]++;
            break;
          }
        }
      }
    }

    let max = 0;
    let maxStudent = 0;
    for (let i = 1; i <= n; i++) {
      if (cnt[i] > max) {
        max = cnt[i];
        maxStudent = i;
      } else if (cnt[i] === max && maxStudent > i) {
        maxStudent = i;
      }
    }

    console.log(maxStudent);
  };

  inputStudentData(1);
});
