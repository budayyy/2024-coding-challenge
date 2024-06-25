//2024-CODING-CHALLENGE
// 145/366
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
  return String.fromCharCode(
    array
      .find((c, i) => array[i + 1].charCodeAt() - c.charCodeAt() !== 1)
      .charCodeAt() + 1
  );
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
