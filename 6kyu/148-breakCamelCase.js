//2024-CODING-CHALLENGE
// 148/366
// https://www.codewars.com/kata/5208f99aee097e6552000148/

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

console.log(solution("camelCasing"));
