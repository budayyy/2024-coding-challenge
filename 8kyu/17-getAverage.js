//2024-CODING-CHALLENGE
// 17/366
//https://www.codewars.com/kata/563e320cee5dddcf77000158/

const getAverage = (marks) => {
  return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
};

console.log(getAverage([2, 2, 2, 2]));
