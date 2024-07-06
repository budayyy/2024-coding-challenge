//2024-CODING-CHALLENGE
// 156/366
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!"));
