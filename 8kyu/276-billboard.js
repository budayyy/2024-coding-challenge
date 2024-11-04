// 2024-CODING-CHALLENGE
// 276/366
// https://www.codewars.com/kata/570e8ec4127ad143660001fd

function billboard(name, price = 30) {
  let panjang = name.split("").length;

  let result = 0;
  for (let i = 0; i < panjang; i++) {
    result += price;
  }

  return result;
}

console.log(billboard("Jeong-Ho Aristotelis"));
