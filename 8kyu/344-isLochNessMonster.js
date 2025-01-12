// 2024-CODING-CHALLENGE
// 344/366
// https://www.codewars.com/kata/55ccdf1512938ce3ac000056

function isLochNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return /tree fiddy|3\.50|three fifty/.test(s);
}

console.log(
  isLochNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);
