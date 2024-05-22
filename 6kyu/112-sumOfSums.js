//2024-CODING-CHALLENGE
// 112/366
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

const multiplicationTable = function (size) {
  // insert code here
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
};

console.log(multiplicationTable(3));
