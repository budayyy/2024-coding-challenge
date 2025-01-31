// 2024-CODING-CHALLENGE
// 363/366
// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

function grader(score) {
  if (score > 1 || score < 0.6) {
    return "F";
  } else if (score >= 0.9) {
    return "A";
  } else if (score >= 0.8) {
    return "B";
  } else if (score >= 0.7) {
    return "C";
  } else if (score >= 0.6) {
    return "D";
  }
}

console.log(grader(0.7));
