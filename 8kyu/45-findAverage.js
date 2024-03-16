//2024-CODING-CHALLENGE
// 45/366
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  // your code here
  if (array.length <= 0) return 0;
  return array.reduce((acc, curr) => acc + curr) / array.length;
}

console.log(findAverage([]));
