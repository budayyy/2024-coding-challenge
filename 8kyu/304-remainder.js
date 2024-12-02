// 2024-CODING-CHALLENGE
// 304/366
// https://www.codewars.com/kata/524f5125ad9c12894e00003f

function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  return n > m ? n % m : m % n;
}

console.log(remainder(17, 5));
