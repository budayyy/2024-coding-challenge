// 2024-CODING-CHALLENGE
// 169/366
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

function bmi(weight, height) {
  const bmi = Math.ceil(weight / Math.pow(height, 2));

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
