//2024-CODING-CHALLENGE
// 109/366
// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === "string") {
    return iterable.split("").filter((x, i, arr) => x !== arr[i - 1]);
  } else {
    return iterable.filter((x, i, arr) => x !== arr[i - 1]);
  }
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
