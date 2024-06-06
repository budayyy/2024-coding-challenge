//2024-CODING-CHALLENGE
// 127/366
// https://www.codewars.com/kata/56dfd5dfd28ffd52c6000bb7

function testit(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const a = arr.filter((x) => x != min && x != max);
  const avg = a.length ? a.reduce((acc, curr) => acc + curr) / a.length : 0;
  return Math.round(avg * 100) / 100;
}

console.log(testit([]));
console.log(testit([0]));
console.log(testit([1, 1]));
console.log(testit([8]));
