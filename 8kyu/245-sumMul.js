// 2024-CODING-CHALLENGE
// 245/366
// https://www.codewars.com/kata/57241e0f440cd279b5000829

function sumMul(n, m) {
  //your idea here
  let result = 0;

  if (n >= m) return "INVALID";
  for (let i = n; i < m; i += n) {
    result += i;
  }

  return result;
}

console.log(sumMul(2, 9));
