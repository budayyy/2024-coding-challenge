// 2024-CODING-CHALLENGE
// 225/366
// https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b) {
  // your code here
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}

console.log(solution("45", "1"));
