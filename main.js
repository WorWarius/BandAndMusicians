//import bandsData from ('./bands.json')
//import musicianData from ('./musicians.json')
//import fs from ('fs');
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
//import { Band, Musician } from "./classes.js";


let musiker = []

let namn;
let lastName;
let birthDay;
let info;
let instruments = []
let currentBands = []
let previousBands = []

let bandName;
let foundationDate;
let disbandment;
let bandInfo;
let theMembersInfo = []
let previousMemberInfo = []



Menu();



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
      //Köra en funktion där användaren ska lägga till namn, efternamn, födelsedatum, information om skådisen, vilka band de är i, vilka de har varit i och vad för instrument de spelar
      namn = prompt("Write your first name: ");
      lastName = prompt("Write your last name: ");
      birthDay = prompt("Write your birthday in this way: yyyy-mm-dd: ");
      info = prompt("Write some additional information you want to add: ");
      const howManyInstruments = prompt("How many instruments does the musicians play? (note that singing is considered as a instrument here!): ")
      for (let i = 0; i < parseInt(howManyInstruments); i++) {
        const instrument = prompt("Write the instrument the artist can play")
        instruments.push(instrument);
      }

      let musikern = {
        'name': namn,
        'lastName': lastName,
        'birthDay': birthDay,
        'info': info,
        'instruments': instruments,
        'currentBands': currentBands,
        'previousBands': previousBands
      }
      musiker.push(musikern)
      console.log(musiker[0])


    case "2":
    //köra en funktion som skriver ut namnet på bandet, när det grundades, när (om) de löstes upp, info om bandet, vilka som är medlemmar och info om dem och vilka som har varit medlemmar
    case "3":
    //En funktion för att ta bort en musiker helt
    case "4":
    //En funktion för att ta bort ett band helt
    case "5":
    //en funktion som visar upp alla musiker där de kan välja en musiker och ett band att lägga till musikern i
    case "6":
    //en funktiomn som tar upp en alla musiker där man kan klicka på en musiker och ta bort de från ett band om de är med ett band (kanske kan ha en bool som tittar om de är i ett band eller inte)
    case "7":
    //En funktion som tar upp en lista på alla musiker där använderen kan välja en musiker och skriver då ut all info om dem
    case "8":
    //En funktion som tar upp en lista på band  där använderen kan välja ett band och skriver då ut all info om det
    case "9":
    //avsluta allt
    default:
    //Gör så att användaren inte kan skriva alternativ som inte finns.

  }
}