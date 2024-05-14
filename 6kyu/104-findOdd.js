//2024-CODING-CHALLENGE
// 104/366
// https://www.codewars.com/kata/54da5a58ea159efa38000836/

function findOdd(A) {
  //happy coding!
  return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
