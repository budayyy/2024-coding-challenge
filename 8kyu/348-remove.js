// 2024-CODING-CHALLENGE
// 348/366
// https://www.codewars.com/kata/57faf7275c991027af000679

function remove(s, n) {
  //coding and coding....
  let count = 0;
  return s
    .split("")
    .filter((char) => {
      if (char === "!" && count < n) {
        count++;
        return false;
      }
      return true;
    })
    .join("");
}

console.log(remove("Hi!", 1));
console.log(remove("Hi!", 100));
