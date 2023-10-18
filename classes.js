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

export class Musicians {

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

  /*
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
  */


  static AddMuscician() {
    clear();
    let isNumber = false;
    //instruments = []; Checka om denna eller den andra behövs. Tror inte båda behövs
    theName = prompt("Write your first name: ");
    lastName = prompt("Write your last name: ");
    while (isNumber == false) {
      birthYear = parseInt(prompt("Write your birthyear (It should be written like this: yyyy): "));
      if (typeof birthYear === 'number' && !isNaN(birthYear)) {
        isNumber = true;
      }
      else {
        isNumber = false;
        console.log("You did not put in a valid year")
      }
    }
    info = prompt("Write some additional information you want to add: ");
    isNumber = false;
    while (isNumber == false) {
      const howManyInstruments = parseInt(prompt("How many instruments does the musicians play? (note that singing is considered as a instrument here!): "))
      if (typeof howManyInstruments === 'number' && !isNaN(howManyInstruments)) {
        for (let i = 0; i < parseInt(howManyInstruments); i++) {
          const instrument = prompt("Write the instrument the artist can play: ")
          instruments.push(instrument);

        }
        isNumber = true;
      }
      else {
        console.log("You have to write how many instruments they play with numbers! ")
      }
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

    //this.UpploadMusicianData()
  }

  static RemoveMusician() {
    clear()
    console.log("Pick which musician to remove by picking its number")
    this.WriteMusicianList()

    let whichToRemove = parseInt(prompt());
    if (whichToRemove >= 0 && whichToRemove < musiker.length) {
      musiker.splice(whichToRemove, 1)
      console.log("removing the musician!")
    }
    else {
      console.log("Is not a valid option.")
    }

    for (let i = 0; i < musiker.length; i++) {
      console.log(`${i}.`, musiker[i].name);
    }
  }

  static UpploadMusicianData() {
    fs.writeFile('./musicians.json', JSON.stringify(musiker, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  static WriteMusicianList() {
    for (let i = 0; i < musiker.length; i++) {
      console.log(`${i}.`, musiker[i].name);
    }
  }

  static MusicianInfo() {
    clear();
    console.log("Which Musician do you want information of? Please pick the musican by writing the number next to their name at the bottom: ")
    this.WriteMusicianList();

    let whichToGetInfoFrom = parseInt(prompt());
    if (whichToGetInfoFrom >= 0 && whichToGetInfoFrom < musiker.length) {
      console.log(musiker[whichToGetInfoFrom])

    }
    else {
      console.log("Is not a valid option.")
    }
  }
}







export class Band {
  constructor() {
    this.bandName = theBandName;
    this.foundation = birthDay;
    this.isDisbanded = ifItsDisbanded;
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

export class Bands {

}


