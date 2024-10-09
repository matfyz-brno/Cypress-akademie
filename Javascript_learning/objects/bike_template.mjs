export class BikeTemplate {
  constructor(color, type) {
    this.color = color;
    this.type = type;
    //po těchto řádcích máme dve promenné this.color a promennou color. Promenna color ale funguje jen v konstruktoru, ale this.color funguje obecne.
    console.log(
      `Kolo má vlastnostmi: \n\t - barva: ${this.color} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
    // zpetne lomitko n znmena novy radek a zpetne lomitko t znamena tabulator, a např. zpetne lomitko a uvozovky znamena normalni text uvozovky a ne nic jako funkce
  }
  logCarProperties() {
    console.log(
      `Informace o autě: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
  }
}
