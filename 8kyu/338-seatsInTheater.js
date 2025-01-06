// 2024-CODING-CHALLENGE
// 338/366
// https://www.codewars.com/kata/588417e576933b0ec9000045

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  return (nCols - col + 1) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));
