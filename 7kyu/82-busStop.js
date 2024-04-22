//2024-CODING-CHALLENGE
// 82/366
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// var number = function (busStops) {
//   // Good Luck!
//   let up = 0;
//   let down = 0;

//   for (let i = 0; i < busStops.length; i++) {
//     up += busStops[i][0];
//     down += busStops[i][1];
//   }

//   return up - down;
// };

const number = (busStop) =>
  busStop.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
