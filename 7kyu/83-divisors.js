//2024-CODING-CHALLENGE
// 83/366
// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  const result = [...Array(integer).keys()]
    .slice(1)
    .filter((n) => integer % n === 0)
    .filter((i) => i > 1);

  return result.length > 0 ? result : `${integer} is prime`;
}

console.log(divisors(12));
console.log(divisors(13));
