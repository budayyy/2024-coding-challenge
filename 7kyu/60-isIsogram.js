//2024-CODING-CHALLENGE
// 60/366
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram(""));
