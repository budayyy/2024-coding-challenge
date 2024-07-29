// 2024-CODING-CHALLENGE
// 179/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// function bonusTime(salary, bonus) {
//   // your code here
//   if (bonus) {
//     return "£" + salary * 10;
//   } else {
//     return "£" + salary;
//   }
// }

const bonusTime = (salary, bonus) => (bonus ? "£" + salary * 10 : "£" + salary);

console.log(bonusTime(10000, true));
