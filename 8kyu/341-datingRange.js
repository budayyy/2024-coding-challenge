// 2024-CODING-CHALLENGE
// 341/366
// https://www.codewars.com/kata/5803956ddb07c5c74200144e

function datingRange(age) {
  //return min-max
  if (age <= 14) {
    return `${Math.floor(age - 0.1 * age)}-${Math.floor(age + 0.1 * age)}`;
  }
  return `${Math.floor(age / 2 + 7)}-${(age - 7) * 2}`;
}

console.log(datingRange(17));
