//2024-CODING-CHALLENGE
// 63/366
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());
