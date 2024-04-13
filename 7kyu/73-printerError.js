//2024-CODING-CHALLENGE
// 73/366
// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  // your code
  if (s.match(/[^a-m]/g) === null) {
    return `${0}/${s.length}`;
  }
  return `${s.match(/[^a-m]/g).length}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
