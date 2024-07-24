// 2024-CODING-CHALLENGE
// 174/366
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

console.log(quarterOf(12));
