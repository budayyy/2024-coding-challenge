// 2024-CODING-CHALLENGE
// 347/366
// https://www.codewars.com/kata/54598d1fcbae2ae05200112c

function all(arr, fun) {
  // ...
  return arr.every(fun);
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  })
);
