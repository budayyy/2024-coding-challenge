//2024-CODING-CHALLENGE
// 96/366
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  let middle = triplet.find(
    (num) => num !== Math.min(...triplet) && num !== Math.max(...triplet)
  );
  return triplet.indexOf(middle);
}

console.log(gimme([2, 3, 1]));
