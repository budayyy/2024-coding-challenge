//2024-CODING-CHALLENGE
// 147/366
// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr, n) {
  // ...
  let cache = {};
  return arr.filter((v) => (cache[v] = ~~cache[v] + 1) <= n);
}

console.log(deleteNth([20, 37, 20, 21], 1));
