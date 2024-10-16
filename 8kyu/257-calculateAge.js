// 2024-CODING-CHALLENGE
// 257/366
// https://www.codewars.com/kata/5761a717780f8950ce001473

function calculateAge(yearOld, yearNew) {
  // enter your code here.
  if (yearNew > yearOld) {
    return `You are ${Math.abs(yearNew - yearOld)} year${
      Math.abs(yearNew - yearOld) === 1 ? "" : "s"
    } old.`;
  } else if (yearNew == yearOld) {
    return `You were born this very year!`;
  } else {
    return `You will be born in ${yearOld - yearNew} year${
      Math.abs(yearOld - yearNew) === 1 ? "" : "s"
    }.`;
  }
}

console.log(calculateAge(2012, 2016));
