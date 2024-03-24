//2024-CODING-CHALLENGE
// 53/366
// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((v, i) => v * v)
      .join("")
  );
}

console.log(squareDigits(3212));
