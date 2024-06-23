//2024-CODING-CHALLENGE
// 143/366
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  // do magic
  return +arr.filter((value) => {
    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}

console.log(findUniq([1, 0, 0]));
