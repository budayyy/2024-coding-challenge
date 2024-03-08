//2024-CODING-CHALLENGE
// 9/366
//https://www.codewars.com/kata/577a98a6ae28071780000989

// cara bar bar
const min = function (list) {
  let result = list[0];
  for (i = 1; i <= list.length; i++) {
    if (list[i] < result) {
      result = list[i];
    }
  }

  return result;
};

const max = function (list) {
  let result = list[0];
  for (i = 1; i <= list.length; i++) {
    if (list[i] > result) {
      result = list[i];
    }
  }

  return result;
};

// cara one liner
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
