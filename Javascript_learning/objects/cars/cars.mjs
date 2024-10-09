import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("Red", "1.4TDI", "Diesel");
dieselCar.logCarProperties();

const gasCar = new CarBlueprint("Purple", "dvě veverky", "LPG");
gasCar.logCarProperties();

const inductCar = new CarBlueprint("Grey", "EV 160 kW", "electric");
inductCar.logCarProperties();

console.log(inductCar.color); //vrací jen jednu informaci o daném inductcar
console.log(gasCar.getColor());
inductCar.repaint("Green");
inductCar.logCarProperties();
