// 2024-CODING-CHALLENGE
// 181/366
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let cat = 0;
  let dog = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      cat = 15;
      dog = 15;
    } else if (i === 2) {
      cat = 24;
      dog = 24;
    } else {
      cat += 4;
      dog += 5;
    }
  }

  return [humanYears, cat, dog];
};

console.log(humanYearsCatYearsDogYears(10));
