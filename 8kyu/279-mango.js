// 2024-CODING-CHALLENGE
// 279/366
// https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price) {
  let pay = 0;

  for (let i = 1; i <= quantity; i++) {
    if (!(i % 3 === 0)) {
      pay++;
    }
  }

  return pay * price;
}

console.log(mango(9, 5));
