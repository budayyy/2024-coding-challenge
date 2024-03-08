//2024-CODING-CHALLENGE
// 32/366
//https://www.codewars.com/kata/5aa736a455f906981800360d/

function feast(beast, dish) {
  //your function here
  return beast[0] === dish[0] && beast.at(-1) === dish.at(-1);
}

console.log(feast("great blue heron", "garlic naan"));
