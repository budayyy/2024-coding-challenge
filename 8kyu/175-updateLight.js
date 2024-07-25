// 2024-CODING-CHALLENGE
// 175/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
  //your code here!
  const traffic = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };

  return traffic[current];
}

console.log(updateLight("green"));
