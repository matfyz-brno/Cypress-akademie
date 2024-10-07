//program nam posoudi vek uzivateele a pokud bude vetsi nez 18 let tak napise ze muze pit alkohol a pokud ma neme nez 18 let tak pit alhokol nesmi pit....

const actualAge = -5;
const drinkingAgeLimit = 18;
const fullName = "Pepa Párek";

/*if (actualAge >= drinkingAgeLimit) {
  console.log(`Gratulujeme, ${fullName}, už můžeš pít alkohol`);
} else {
  console.log(
    `Běž domů, ${fullName}, do možnosti pití alkoholu Ti chybí ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
}
*/

if (actualAge >= drinkingAgeLimit) {
  console.log(`Gratulujeme, ${fullName}, už můžeš pít alkohol`);
} else if (actualAge >= 0) {
  console.log(
    `Běž domů, ${fullName}, do možnosti pití alkoholu Ti chybí ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.log(`Neplatný věk!`);
}
