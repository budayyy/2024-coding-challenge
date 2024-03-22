//2024-CODING-CHALLENGE
// 51/366
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount(str) {
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "i" ||
//       str[i] === "u" ||
//       str[i] === "e" ||
//       str[i] === "o"
//     )
//       result += 1;
//   }
//   return result;
// }

const getCount = (str) =>
  str.split("").filter((c) => "aeiuo".includes(c)).length;

console.log(getCount("budi setiawan"));
