//2024-CODING-CHALLENGE
// 72/366
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   let result = 0;

//   if (Math.sqrt(sq) % 1 === 0) {
//     let hasil = Math.sqrt(sq);
//     hasil++;
//     return hasil * hasil;
//   } else {
//     result = -1;
//   }

//   return result;
// }

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

console.log(findNextSquare(625));
