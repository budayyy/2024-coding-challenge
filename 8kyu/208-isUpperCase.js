// 2024-CODING-CHALLENGE
// 208/366
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function () {
  // your code here
  return this.toString() === this.toUpperCase();
};

console.log("HELLO WORLD".isUpperCase());
