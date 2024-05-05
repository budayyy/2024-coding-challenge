//2024-CODING-CHALLENGE
// 94/366
// https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
  // your code
  let year = 0;
  while (principal < desired) {
    let result = principal * interest - principal * interest * tax;
    principal += result;
    year++;
  }
  return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1000));
