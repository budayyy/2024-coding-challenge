// 2024-CODING-CHALLENGE
// 329/366
// https://www.codewars.com/kata/572b77262bedd351e9000076

function first(arr, n = 1) {
  return arr.slice(0, n);
}

console.log(first(["a", "b", "c", "d", "e"], 2));
console.log(first(["a", "b", "c", "d", "e"]));
