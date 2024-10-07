const array = ["Karel", "Pepa", "Marie", "Oliver"];
console.log(array);
console.log(array[0]); // výpis prvního textu ze seznamu 0 - 1 - 2 - 3

//jak dát do cyklu?

for (let i = 0; i < array.length; i++) {
  console.log("Vypisuji hodnotu array: " + i + "hodnota " + array[i]);
}

//for each
array.forEach((element) => {
  console.log("Vypisuji hodnotu array: " + element);
});

//okud nazev arrrays je v mnoznem cisle, tak potom nazev prvku ve foreach je jednotne cislo
const passwords = ["p1", "p2"];
passwords.forEach((password) => {});
