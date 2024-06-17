//2024-CODING-CHALLENGE
// 138/366
// https://www.codewars.com/kata/525a4cab1650d76b8000084d

function isArray(arr) {
  // This is what we would like to do, but it's not allowed.
  return Object.prototype.toString.call(arr) === "[Object Array]";
}

console.log(Object.defineProperty([], "prop", { value: "value" }));
