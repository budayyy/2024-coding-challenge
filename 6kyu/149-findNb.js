//2024-CODING-CHALLENGE
// 149/366
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let i = 1;
  let count = 0;
  while (m > 0) {
    m -= Math.pow(i, 3);
    i++;
    count++;
  }

  return m === 0 ? count : -1;
}

console.log(findNb(4183059834009));
