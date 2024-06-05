//2024-CODING-CHALLENGE
// 126/366
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/

function sortArray(array) {
  // Return a sorted array.
  let odd = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  return array.map((x) => (x % 2 !== 0 ? odd.shift() : x));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
