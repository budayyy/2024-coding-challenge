//2024-CODING-CHALLENGE
// 18/366
//https://www.codewars.com/kata/5708f682c69b48047b000e07

const multiply = (number) => {
  //your code here
  let pangkat = Math.abs(number).toString().length;

  return number * Math.pow(5, pangkat);
};

console.log(multiply(3));
