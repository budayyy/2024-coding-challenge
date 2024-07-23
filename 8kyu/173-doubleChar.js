// 2024-CODING-CHALLENGE
// 173/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map((i) => i + i)
    .join("");
}

console.log(doubleChar("abcd"));
