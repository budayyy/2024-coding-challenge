// 2024-CODING-CHALLENGE
// 334/366
// https://www.codewars.com/kata/567bf4f7ee34510f69000032

String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};

console.log("2".digit());
