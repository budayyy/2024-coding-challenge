// 2024-CODING-CHALLENGE
// 313/366
// https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
  let result = 0;
  switch (rating.toLowerCase()) {
    case "excellent":
      result = amount * 0.2;
      break;
    case "great":
      result = amount * 0.15;
      break;
    case "good":
      result = amount * 0.1;
      break;
    case "poor":
      result = amount * 0.05;
      break;
    case "terrible":
      result;
      break;
    default:
      return "Rating not recognised";
      break;
  }

  return Math.ceil(result);
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));
