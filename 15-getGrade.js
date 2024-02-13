//2024-CODING-CHALLENGE
// 15/366
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade(...s) {
  // Code here
  let score = s.reduce((acc, curr) => acc + curr) / s.length;
  console.log(score);

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(44, 55, 52));
