// 2024-CODING-CHALLENGE
// 356/366
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  return (
    (blueStart - bluePulled) / (blueStart - bluePulled + (redStart - redPulled))
  );
}

console.log(guessBlue(5, 5, 2, 3));
