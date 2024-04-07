//2024-CODING-CHALLENGE
// 67/366
// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
  //Good luck!
  if (a === b) return a;
  let result = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  }

  return result;
}

console.log(getSum(-1, 2));
