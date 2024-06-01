//2024-CODING-CHALLENGE
// 122/366
// https://www.codewars.com/kata/52249faee9abb9cefa0001ee

function uniq(a) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i - 1] !== a[i]) {
      result.push(a[i]);
    }
  }

  return result;
}

console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]));
