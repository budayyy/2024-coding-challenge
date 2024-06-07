//2024-CODING-CHALLENGE
// 128/366
// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

// function oddRow(n) {
//   const triangle = [];
//   let start = 1;

//   for (let i = 0; i < n; i++) {
//     const rowArray = [];

//     const elementInRow = i + 1;

//     for (let j = 0; j < elementInRow; j++) {
//       rowArray.push(start);
//       start += 2;
//     }

//     triangle.push(rowArray);
//   }

//   return triangle[n - 1];
// }

// function oddRow(n) {
//   let first = 1;
//   for (let i = 1; i < n; i++) {
//     first += i * 2;
//   }

//   let r = [first];
//   for (let i = 1; i < n; i++) {
//     r.push((first += 2));
//   }

//   return r;
// }

function oddRow(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => n * n - n + 1 + i * 2);
}

console.log(oddRow(13));
