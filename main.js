//import bandsData from ('./bands.json')
//import musicianData from ('./musicians.json')
import fs from 'fs'
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import { Band, Musician } from "./classes.js";
import { clear } from 'console';

//const data = fs.readFileSync("./musicians.json")
//const savedMuscians = JSON.parse(data);

let run = true //används för att main i en while loop
let bands = []

let bandName;
let foundationYear;
let isDisbanded;
let disbandment;
let bandInfo;
let currentMembers = []
let previousMembers = []

/*
while (run == true) {
  Menu()
}
*/
while (run == true) {
  Menu();
}

function Menu() {
  console.log("1. Lägg till musiker")
  console.log("2. Lägg till band")
  console.log("3. Ta bort musiker")
  console.log("4. Ta bort band")
  console.log("5. Lägg till en musiker i ett band") //Ha att en lista kommer upp på alla musiker i nummer där först man väljer personen och sedan för välja bandet i en nummer lista för att lägga till den
  console.log("6. Ta bort musiker från ett band") //Samma sak som innan men att man väljer en musiker och sedan kommer endast bandet upp på det band som musikern du valt är med i
  console.log("7. Information om musiker") //En lista på alla musiker och den man väljer får man information om¨
  console.log("8. Information om band") //percis som den över men istället har den info om band
  console.log("9. Avsluta")

  const choice = prompt()

  switch (choice.trim()) {
    case "1":
      Musician.AddMuscician();
      break;


    case "2":
      //köra en funktion som skriver ut namnet på bandet, när det grundades, när (om) de löstes upp, info om bandet, vilka som är medlemmar och info om dem och vilka som har varit medlemmar
      //AddBand();
      break;
    case "3":
      Musician.RemoveMusician();
      break;
    case "4":
      //En funktion för att ta bort ett band helt
      break;
    case "5":
      //en funktion som visar upp alla musiker där de kan välja en musiker och ett band att lägga till musikern i
      break;
    case "6":
      //en funktiomn som tar upp en alla musiker där man kan klicka på en musiker och ta bort de från ett band om de är med ett band (kanske kan ha en bool som tittar om de är i ett band eller inte)
      break;
    case "7":
      Musician.MusicianInfo();
      break;
    case "8":
      //En funktion som tar upp en lista på band  där använderen kan välja ett band och skriver då ut all info om det
      break;
    case "9":
      run = false;
      Musician.UpploadMusicianData();
      break;
    default:
      console.log("That is not a valid option")
      break;

  }

}

function AddBand() {
  bandName = prompt("Write the name of the band: ");
  foundationYear = prompt("Write the year the band was made: ");
  console.log(`Is the band disbanded?
      1. Yes
      2. No
      `)
  isDisbanded = prompt()
  if (isDisbanded == 1) {
    isDisbanded = "Yes"
    disbandment = prompt("Write the year the band disbanded: ");
  } else if (isDisbanded == 2) {
    isDisbanded = "No"
    disbandment = "Currently Active"
  } else {
    console.log("You did not give a valid answer")
  }
  bandInfo = prompt("Write some additional information you want to add: ");

  let theBand = {
    'Band Name': bandName,
    'Foundation Year': foundationYear,
    'Disbanded': isDisbanded,
    'Disbandment Info': disbandment,
    'Band Info': bandInfo,
    'Current Members': currentMembers,
    'Previous Members': previousMembers
  }

  bands.push(theBand)
  console.log(bands[0])
}