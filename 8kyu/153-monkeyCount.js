//2024-CODING-CHALLENGE
// 153/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
  // your code here
  return [...Array(n)].map((v, i) => i + 1);
}

console.log(monkeyCount(5));
