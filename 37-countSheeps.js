//2024-CODING-CHALLENGE
// 37/366
//https://www.codewars.com/kata/54edbc7200b811e956000556/

function countSheeps(sheep) {
  // TODO
  let result = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) {
      result += sheep[i];
    }
  }
  return result;
}

// const countSheeps = (sheep) => sheep.filter(Boolean).length;

// console.log(countSheeps([]));
// console.log(countSheeps(false));
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
