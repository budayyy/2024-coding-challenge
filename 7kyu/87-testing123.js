//2024-CODING-CHALLENGE
// 87/366
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

const number = function (array) {
  let result = [];
  if (array.length === 0) return result;
  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }

  return result;
};

// console.log(number([]));
console.log(number(["a", "b", "c"]));
