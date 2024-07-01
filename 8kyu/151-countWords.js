//2024-CODING-CHALLENGE
// 151/366
//https://www.codewars.com/kata/570cc83df616a85944001315

function countWords(str) {
  return str.split(/\s/).filter((element) => element).length;
}

console.log(countWords("Hello"));
console.log(countWords("Hello, World!"));
console.log(countWords(""));
