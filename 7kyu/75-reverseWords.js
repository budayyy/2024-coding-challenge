//2024-CODING-CHALLENGE
// 75/366
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// function reverseWords(str) {
//   // Go for it
//   return str
//     .split(" ")
//     .map(function (value, index) {
//       return value.split("").reverse().join("");
//     })
//     .join(" ");
// }

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
