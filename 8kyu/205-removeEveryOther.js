// 2024-CODING-CHALLENGE
// 205/366
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr) {
  //your code here
  return arr.filter((v, i) => i % 2 == 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
