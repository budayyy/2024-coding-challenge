//2024-CODING-CHALLENGE
// 26/366
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/

// class SmallestIntegerFinder {
//   findSmallestInt = (args) => args.sort((a, b) => a - b)[0];
// }

class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}

const sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
