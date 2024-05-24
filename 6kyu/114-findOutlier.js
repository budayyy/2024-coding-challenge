//2024-CODING-CHALLENGE
// 114/366
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/

function findOutlier(integers) {
  //your code here
  // dicari dahulu % 2 === 0
  // lalu di cari kembali
  return integers.filter((x) => x % 2 === 0).length === 1
    ? integers.find((x) => x % 2 === 0)
    : integers.find((x) => x % 2 !== 0);
}

console.log(findOutlier([1, 1, 0, 1, 1]));
