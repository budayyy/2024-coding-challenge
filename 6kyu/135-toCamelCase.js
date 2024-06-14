//2024-CODING-CHALLENGE
// 135/366
// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the_stealth_warrior"));
