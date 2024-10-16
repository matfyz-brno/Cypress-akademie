import { Bathroom } from "./bathroom.mjs";

export class EntryHall {
  constructor() {
    console.log("User entered to entryhall");
  }

  entryBathroom() {
    console.log("User is in restroom");
    return new Bathroom();
  }

  askQuestion(question) {
    console.log("User asked the question:" + question);
    console.log("She is quiet");
    return this; //(pokud zustavam na stejnem miste)
  }
}
