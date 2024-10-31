// 2024-CODING-CHALLENGE
// 272/366
// https://www.codewars.com/kata/568dc014440f03b13900001d

function getDrinkByProfession(param) {
  let data = param.toLowerCase();
  if (data === "jabroni") {
    return "Patron Tequila";
  } else if (data == "school counselor") {
    return "Anything with Alcohol";
  } else if (data === "programmer") {
    return "Hipster Craft Beer";
  } else if (data === "bike gang member") {
    return "Moonshine";
  } else if (data === "politician") {
    return "Your tax dollars";
  } else if (data === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}

console.log(getDrinkByProfession("prOgramMer"));
