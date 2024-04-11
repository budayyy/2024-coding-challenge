//2024-CODING-CHALLENGE
// 71/366
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// function openOrSenior(data) {
//   // ...
//   return data.map((value, index) =>
//     value[0] >= 55 && value[1] > 7 ? "Senior" : "Open"
//   );
// }

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
