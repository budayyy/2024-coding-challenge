//2024-CODING-CHALLENGE
// 46/366
//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

// function paperwork(n, m) {
//   if (n < 0 || m < 0) return 0;
//   return n * m;
// }

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(paperwork(-4, -5));
