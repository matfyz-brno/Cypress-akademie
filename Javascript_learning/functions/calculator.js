const addNumbers = (numbA, numB) => {
  const resultAdd = numbA + numB;
  console.log("Součet: " + resultAdd);
};

const substractNumbers = (numbA, numB) => {
  const resultSubctract = numbA - numB;
  console.log("Rozdíl: " + resultSubctract); // zapis s proměnnou
  console.log(`Rozdíl: ${numbA - numB}`); // zapis pomocí dolaru "Template literals"
};

addNumbers(15, 48);
substractNumbers(98, 41);
