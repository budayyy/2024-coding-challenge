//2024-CODING-CHALLENGE
// 101/366
// https://www.codewars.com/kata/514b92a657cdc65150000006/

function solution(number) {
  if (number < 0) return 0;
  let result = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
    }
  }

  return result;
}

console.log(solution(10));
