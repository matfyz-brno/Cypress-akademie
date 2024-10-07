const usernames = ["Admin", "Manager", "Officer", "Enum", "Guest", "Employee"]; //vytvořen seznam
usernames.forEach((username) => {
  console.log("Uživatelé: " + username);
});
//zde se vypisuji jednotlivi uzivatele, než dojde celý seznam uživatelů

const firstNames = ["Adam", "Bedřich", "Cyril", "David", "Emil", "František"];
const lastNames = ["Aram", "Bouda", "Cumlík", "Demar", "Emtrprize", "Flákač"]; //vytvořen seznam, musí být stejný počet orvků
firstNames.forEach((firstName, firstIndex) => {
  console.log(`${firstName} ${lastNames[firstIndex]}`);
});
//zde se vypisuji jednotlivi uzivatele, než dojde celý seznam uživatelů
