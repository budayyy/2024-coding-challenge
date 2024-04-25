//2024-CODING-CHALLENGE
// 85/366
// https://www.codewars.com/kata/555eded1ad94b00403000071

// function SeriesSum(n) {
//   let pembagi = 1;
//   let hasil = 0;

//   for (let i = 1; i <= n; i++) {
//     hasil = hasil + 1 / pembagi;
//     pembagi = pembagi + 3;
//   }

//   return hasil === 0 ? "0.00" : hasil.toFixed(2);
// }

function SeriesSum(n) {
  let result = 0;
  for (j = 0; j < n; j++) {
    result += 1 / (1 + result * 3);
  }

  return result.toFixed(2);
}

console.log(SeriesSum(1));
