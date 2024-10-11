// 2024-CODING-CHALLENGE
// 252/366
// https://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n) {
  if (n >= 10) {
    return n * 90;
  } else if (n >= 5) {
    return n * 95;
  } else {
    return n * 100;
  }
}

console.log(saleHotdogs(1));
