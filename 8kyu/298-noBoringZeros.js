// 2024-CODING-CHALLENGE
// 298/366
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/

function noBoringZeros(n) {
  // your code
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

console.log(noBoringZeros(1450));
