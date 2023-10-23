import fs from 'fs'
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import { Band, Musician } from "./classes.js";
import { clear } from 'console';

let run = true

while (run == true) {
  Menu();
}

function Menu() {
  const musican = new Musician();
  console.log("1. Lägg till musiker")
  console.log("2. Lägg till band")
  console.log("3. Ta bort musiker")
  console.log("4. Ta bort band")
  console.log("5. Lägg till en musiker i ett band")
  console.log("6. Ta bort musiker från ett band")
  console.log("7. Information om musiker")
  console.log("8. Information om band")
  console.log("9. Avsluta")

  const choice = prompt()

  switch (choice.trim()) {
    case "1":
      Musician.AddMuscician();
      break;
    case "2":
      Band.CreateBand();
      break;
    case "3":
      Musician.RemoveMusician();
      break;
    case "4":
      Band.RemoveBand();
      break;
    case "5":
      Musician.AddMusicianToBand();
      break;
    case "6":
      Musician.RemoveMusicianFromBand();
      break;
    case "7":
      Musician.MusicianInfo();
      break;
    case "8":
      Band.BandInfo();
      break;
    case "9":
      run = false;
      Musician.UpploadMusicianData();
      Band.UpploadBandData();
      break;
    default:
      console.log("That is not a valid option")
      break;

  }

}

