import { EntryHall } from "./entery_hall.mjs";

export class Bathroom {
  constructor() {
    console.log("User entered to restroom");
  }
  goBackToEntryHall() {
    console.log("User leave restroom and go to Entry hall");
    return new EntryHall();
  }

  washHeands() {
    console.log("User washed your hands"); //tato metoda
    return this;
  }
}
