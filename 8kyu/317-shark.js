// 2024-CODING-CHALLENGE
// 317/366
// https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const effectiveSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;

  // Calculate the time it takes for you and the shark to reach the pontoon
  const yourTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / effectiveSharkSpeed;

  // Determine if you survive or become shark bait
  return yourTime < sharkTime ? "Alive!" : "Shark Bait!";
}

console.log(shark(12, 50, 4, 8, true));
