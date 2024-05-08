//2024-CODING-CHALLENGE
// 98/366
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if (begin > end) return 0;
  let result = 0;
  for (let i = begin; i <= end; i += step) {
    result += i;
  }

  return result;
};

console.log(sequenceSum(2, 6, 2));
