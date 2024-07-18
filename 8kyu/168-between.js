// 2024-CODING-CHALLENGE
// 168/366
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b) {
  // your code here
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

console.log(between(-2, 2));
