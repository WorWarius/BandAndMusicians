//const bandsData = require('./bands.json')
//const musicianData = require('./musicians.json')
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import fs from 'fs'
import { clear } from "console";
const data = fs.readFileSync("./musicians.json")
const savedMuscians = JSON.parse(data);

let musiker = savedMuscians

let theName;
let lastName;
let birthYear;
let info;
let instruments = []
let currentBands = []
let previousBands = []

const clearInstruments = []



export class Musicians {

}
export class Bands {

}

export class Musician {
  constructor() {
    this.theName = firstName;
    this.theLastName = lastName
    this.theBirthYear = birthYear;
    this.information = info;
    this.theCurrentBands = currentBands
    this.thePreviousBands = previousBands
    this.theInstruments = instruments
  }
  displayMusician(theMusician) //denna metod ska skriva ut all informationen om Musikern som de bad att få info om
  {
    console.log()
  }

  set firstName(newName) {
    if (newName.length > 1) {
      this._theName = newName;
    } else {
      console.log("A new name need to have at least 1 letter")

    }
  }
  set lastName(newLastName) {
    if (newLastName.length > 1) {
      this._theLastName = newLastName;
    } else {
      console.log("A new name need to have at least 1 letter")
    }
  }


  static AddMuscician() {
    //instruments = []; Checka om denna eller den andra behövs. Tror inte båda behövs
    theName = prompt("Write your first name: ");
    lastName = prompt("Write your last name: ");
    birthYear = prompt("Write your birthyear: ");
    info = prompt("Write some additional information you want to add: ");
    const howManyInstruments = prompt("How many instruments does the musicians play? (note that singing is considered as a instrument here!): ")
    for (let i = 0; i < parseInt(howManyInstruments); i++) {
      const instrument = prompt("Write the instrument the artist can play: ")
      instruments.push(instrument);
    }

    let musikern = {
      'name': theName,
      'lastName': lastName,
      'birthDay': birthYear,
      'info': info,
      'instruments': instruments,
      'currentBands': currentBands,
      'previousBands': previousBands
    }
    instruments = [];
    musiker.push(musikern)

    this.UpploadMusicianData()


  }
  static RemoveMusician() {
    clear();
    console.log("Pick which musician to remove by picking its number")
    for (let i = 0; i < musiker.length; i++) {
      console.log(`${i}.`, musiker[i].name);


    }
    for (let i = 0; i < clearInstruments.length; i++) {
      console.log(clearInstruments[i]);


    }
  }
  static UpploadMusicianData() {
    fs.writeFile('./musicians.json', JSON.stringify(musiker, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}
export class Band {
  constructor() {
    this.bandName = theBandName;
    this.foundation = birthDay;
    this.disbandDate = currentBands
    this.bandInformation = info;
    this.membersInfo()
    this.previousMemberInfo()
  }

  displayBand(theBand) //denna metod ska skriva ut all informationen om bandet som de bad att få info om 
  {

  }
}

export class AllBands {

}