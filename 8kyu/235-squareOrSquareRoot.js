// 2024-CODING-CHALLENGE
// 235/366
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
  return array.map(function (value, index) {
    let angka = Math.floor(Math.sqrt(value));
    return angka * angka === value ? angka : Math.pow(value, 2);
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
