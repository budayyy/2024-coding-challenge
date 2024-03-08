//2024-CODING-CHALLENGE
// 16/366
//https://www.codewars.com/kata/576b93db1129fcf2200001e6

const sumArray = (array) => {
  if (array === null || array <= 2 || array === undefined) {
    return 0;
  } else {
    let result = 0;
    let sorted = array.sort((a, b) => a - b);
    for (i = 1; i < sorted.length - 1; i++) {
      result += sorted[i];
    }
    return result;
  }
};

console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
