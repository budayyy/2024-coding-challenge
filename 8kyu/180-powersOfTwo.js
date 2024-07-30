// 2024-CODING-CHALLENGE
// 180/366
// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }

  return result;
}

console.log(powersOfTwo(4));
