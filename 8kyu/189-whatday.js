// 2024-CODING-CHALLENGE
// 189/366
// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

function whatday(num) {
  // put your code here
  switch (num) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      return "Wrong, please enter a number between 1 and 7";
      break;
  }
}

console.log(whatday(2));
