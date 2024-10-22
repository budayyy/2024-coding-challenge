// 2024-CODING-CHALLENGE
// 263/366
// https://www.codewars.com/kata/577ff15ad648a14b780000e7

function greet(language) {
  const data = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  if (typeof language !== "string" || language.length === 0) {
    return data["english"];
  }

  return data[language] ?? data["english"];
}

console.log(greet("english"));
