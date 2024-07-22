// 2024-CODING-CHALLENGE
// 172/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
  // Your solution here

  let result = 0;
  let sewa = 40;
  let discount = 0;

  if (d < 3) {
    result = d * sewa;
  } else if (d < 7) {
    result = d * sewa - 20;
  } else {
    result = d * sewa - 50;
  }

  return result;
}

console.log(rentalCarCost(10));
