import { EntryHall } from "./entery_hall.mjs";

new EntryHall()
  .entryBathroom()
  .washHeands()
  .goBackToEntryHall()
  .entryBathroom()
  .goBackToEntryHall()
  .askQuestion("Hello madam, where is my room?");
