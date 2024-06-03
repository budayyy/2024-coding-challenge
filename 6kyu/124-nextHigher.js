//2024-CODING-CHALLENGE
// 124/366
// https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5

// function nextHigher(n) {
//   let c = n;
//   let c0 = 0;
//   let c1 = 0;

//   // Count trailing zeros (c0)
//   while ((c & 1) == 0 && c != 0) {
//     c0++;
//     c >>= 1;
//   }
//   while ((c & 1) == 1) {
//     c1++;
//     c >>= 1;
//   }
//   if (c0 + c1 == 31 || c0 + c1 == 0) {
//     return -1;
//   }
//   let p = c0 + c1;

//   n |= 1 << p;

//   n &= ~((1 << p) - 1);
//   n |= (1 << (c1 - 1)) - 1;

//   return n;
// }

function nextHigher(n) {
  let s = n.toString(2).replace(/0?1(1*)(0*)$/, "10$2$1");
  return parseInt(s, 2);
}

console.log(nextHigher(1));
