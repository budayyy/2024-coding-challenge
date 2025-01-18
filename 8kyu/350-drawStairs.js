// 2024-CODING-CHALLENGE
// 350/366
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n) {
  // your code here
  return [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
}

console.log(drawStairs(5));
