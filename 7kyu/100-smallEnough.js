//2024-CODING-CHALLENGE
// 100/366
// https://www.codewars.com/kata/57cc981a58da9e302a000214/

function smallEnough(a, limit) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= limit) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result.includes(false) ? false : true;
}

console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
