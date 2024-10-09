export class CarBlueprint {
  constructor(color, motor, fuel) {
    this.color = color;
    this.motor = motor;
    this.fuel = fuel;
    this.wheels = 4;
    //po těchto řádcích máme dve promenné this.color a promennou color. Promenna color ale funguje jen v konstruktoru, ale this.color funguje obecne.
    console.log(
      `Auto bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
    // zpetne lomitko n znmena novy radek a zpetne lomitko t znamena tabulator, a např. zpetne lomitko a uvozovky znamena normalni text uvozovky a ne nic jako funkce
  }
  logCarProperties() {
    console.log(
      `Informace o autě: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
  }
  getColor() {
    return this.color;
  }

  repaint(newColor) {
    console.log(`Přebarvuji auto z ${this.color} na ${newColor}`);
    this.color = newColor;
  }
}
