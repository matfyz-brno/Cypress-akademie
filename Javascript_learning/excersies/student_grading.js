const studentName = `Roman Rybíz`;
const score = 12;

if (score < 0) {
  return 0;
} else if (score >= 90 && score <= 100) {
  console.log(`Student ${studentName} získává známku A.`);
} else if (score >= 85 && score <= 89) {
  console.log(`Student ${studentName} získává známku B.`);
} else if (score >= 75 && score <= 84) {
  console.log(`Student ${studentName} získává známku C.`);
} else if (score >= 70 && score <= 74) {
  console.log(`Student ${studentName} získává známku D.`);
} else if (score >= 60 && score <= 69) {
  console.log(`Student ${studentName} získává známku E.`);
} else if (score < 60) {
  console.log(`Student ${studentName} získává známku F.`);
}

//řešení od Petra
/*const points = 55;
const studentName = "Marie Dlouhá";
let grade;

if (points >= 90) {
  grade = "A";
} else if (points >= 85) {
  grade = "B";
} else if (points >= 75) {
  grade = "C";
} else if (points >= 70) {
  grade = "D";
} else if (points >= 60) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`Student/ka: ${studentName} dosáhl/a známky: ${grade}`);
*/
