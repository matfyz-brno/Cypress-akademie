import { Calculator } from "./HW5_calculator_class.mjs";

const calculator = new Calculator();
console.log(`Add example: 14 + 41 = ${calculator.add(14, 41)}`);
console.log(`Subtract example: 174 - 32 = ${calculator.subtract(174, 32)}`);
console.log(`Multiply example: 47 * 50 = ${calculator.multiply(47, 50)}`);
console.log(`Divide example: 125 / 7 = ${calculator.divide(125, 7)}`);

//Also I have this idea, but I am not sure, if it is also ok for your assignment of homework

/*import { Calculator } from "./HW5_calculator_class.mjs";

const calculator = new Calculator();

const number1 = 14;
const number2 = 41;
const number3 = 174;
const number4 = 32;
const number5 = 47;
const number6 = 50;
const number7 = 125;
const number8 = 7; 

console.log(`Add example: ${number1} + ${number2} = ${calculator.add(number1, number2)}`);
console.log(`Subtract example: ${number3} - ${number4} = ${calculator.subtract(number3, number4)}`);
console.log(`Multiply example: ${number5} * ${number6} = ${calculator.multiply(number5, number6)}`);
console.log(`Divide example: ${number7} / ${number8} = ${calculator.divide(number7, number8)}`);
*/
