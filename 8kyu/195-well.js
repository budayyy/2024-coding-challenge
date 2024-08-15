// 2024-CODING-CHALLENGE
// 195/366
// https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x) {
  let good = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      good++;
    }
  }

  if (good === 0) {
    return "Fail!";
  } else if (good == 1 || good == 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
