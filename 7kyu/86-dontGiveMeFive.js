//2024-CODING-CHALLENGE
// 86/366
// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result.filter((number) => !String(number).includes(5)).length;
}

console.log(dontGiveMeFive(4, 17));
