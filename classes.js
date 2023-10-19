import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import fs from 'fs'
import { clear } from "console";
import { createDiffieHellmanGroup } from "crypto";

//#region 
const musicanData = fs.readFileSync("./musicians.json")
const savedMuscians = JSON.parse(musicanData);

let musiker = savedMuscians

let artistName;
let birthYear;
let theAge;
let info;
let instruments = []
let currentBands = []
let previousBands = []
//#endregion

export class Musicians {

}

export class Musician {
  constructor() {
    this.artistName = theArtistName;
    this.theBirthYear = birthYear;
    this.theAge = musiciansAge;
    this.information = info;
    this.theCurrentBands = currentBands
    this.thePreviousBands = previousBands
    this.theInstruments = instruments
  }

  /*
  set theArtistName(newName) {
    if (newName.length > 1) {
      this._theName = newName;
    } else {
      console.log("A new name need to have at least 1 letter")

    }
  }
  */

  static AddMuscician() {
    clear();
    let stopLoopCheck = false;
    artistName = prompt("Write your artist name: ");
    while (stopLoopCheck == false) {
      birthYear = parseInt(prompt("Write your birthyear (It should be written like this: yyyy): "));
      if (typeof birthYear === 'number' && !isNaN(birthYear)) {
        stopLoopCheck = true;
      }
      else {
        stopLoopCheck = false;
        console.log("You did not put in a valid year")
      }
    }
    info = prompt("Write some additional information you want to add: ");
    stopLoopCheck = false;
    while (stopLoopCheck == false) {
      const howManyInstruments = parseInt(prompt("How many instruments does the musicians play? (note that singing is considered as a instrument here!): "))
      if (typeof howManyInstruments === 'number' && !isNaN(howManyInstruments)) {
        for (let i = 0; i < parseInt(howManyInstruments); i++) {
          const instrument = prompt("Write the instrument the artist can play: ")
          instruments.push(instrument);

        }
        stopLoopCheck = true;
      }
      else {
        console.log("You have to write how many instruments they play with numbers! ")
      }
    }
    let currentYear = new Date().getFullYear();
    theAge = currentYear - birthYear

    let musikern = {
      'artist_name': artistName,
      'birthYear': birthYear,
      'age': theAge,
      'info': info,
      'instruments': instruments,
      'currentBands': currentBands,
      'previousBands': previousBands
    }
    instruments = [];
    musiker.push(musikern)

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
  }

  static UpploadMusicianData() {
    fs.writeFile('./musicians.json', JSON.stringify(musiker, null, 2), (err) => {
      if (err) throw err;
      console.log('Musican Data written to file');
    });
  }

  static WriteMusicianList() {
    for (let i = 0; i < musiker.length; i++) {
      console.log(`${i}.`, musiker[i].artist_name);
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
  //se till att man inte kan lägga till en person flera gånger i samma band
  static AddMusicianToBand() {
    let musicanToAdd;
    let toBand;
    let theRun = false;

    while (theRun == false) {
      console.log("Which member do you want to add to a band?")
      this.WriteMusicianList();
      musicanToAdd = parseInt(prompt())
      if (musicanToAdd >= 0 && musicanToAdd < musiker.length) {
        console.log("Which band do you want to add it to? ")
        Band.WriteBandList();
        toBand = parseInt(prompt())


        if (toBand >= 0 && toBand < bands.length) {
          let theSelectedMusician = musiker[musicanToAdd];
          let theSelectedBand = bands[toBand];
          for (let i = 0; i < musiker.length; i++) {
            if (theSelectedMusician.currentBands.includes(theSelectedBand)) //Detta fungerar inte just nu och istället så går den alltid över till else. Men det går att lägga till musiker i band, det är bara att det går att lägga till samma person som redan finns.
            {
              console.log("The musician is already part of the selected band.");
            } else if (!theSelectedMusician.currentBands.includes(theSelectedBand)) {
              this.AddingMusicianToABand(musicanToAdd, toBand);
              console.log("The musician is now added to the band!");
              theRun = true;
            }
            else {
              console.log("That is not a valid option!")
            }

          }


        }
        else {
          console.log("That is not a valid pick: ")
        }
      } else {
        console.log("That is not a valid pick: ")
      }
    }

  }
  //Måste se till att musikern istället går över till previous bands
  static RemoveMusicianFromBand() {
    let musicianToRemove;
    let fromBand;
    let theRun = false;
    while (theRun == false) {
      console.log("Which musicians do you want to remove from a band?")
      this.WriteMusicianList();
      musicianToRemove = parseInt(prompt())
      if (musicianToRemove >= 0 && musicianToRemove < musiker.length) {
        if (musiker[musicianToRemove].currentBands.length > 0) {
          console.log("Which band do you want to remove it from? ")

          for (let i = 0; i < musiker[musicianToRemove].currentBands.length; i++) {
            console.log(`${i}.`, musiker[musicianToRemove].currentBands[i]);
          }


          fromBand = parseInt(prompt())
          if (fromBand >= 0 && fromBand < bands[fromBand].Current_Members.length) {
            this.MovingMusicianToPreviousBands(musicianToRemove, fromBand)
            this.MusicianFromBandRemoval(musicianToRemove, fromBand)
            console.log("The musician is now removed from the band!")
            theRun = true;
          }
          else {
            console.log("That is not a valid pick: ")
          }
        } else {
          console.log("That musicians are not part of any bands: ")
        }
      } else {
        console.log("That is not a valid pick: ")
      }

    }
  }

  static MusicianFromBandRemoval(musicianToBeRemoved, fromWhichBand) {
    musiker[musicianToBeRemoved].currentBands.splice(bands[fromWhichBand], 1)
    bands[fromWhichBand].Current_Members.splice(musiker[musicianToBeRemoved], 1)
  }

  static AddingMusicianToABand(musicanToBeAdded, toWhichBand) {
    musiker[musicanToBeAdded].currentBands.push(bands[toWhichBand].Band_Name)
    bands[toWhichBand].Current_Members.push(musiker[musicanToBeAdded].artist_name)
  }
  static MovingMusicianToPreviousBands(musicanToBeMoved, toWhichBand) {
    musiker[musicanToBeMoved].previousBands.push(bands[toWhichBand].Band_Name)
    bands[toWhichBand].Previous_Members.push(musiker[musicanToBeMoved].artist_name)
  }

}

//#region 
const bandData = fs.readFileSync("./bands.json")
const savedBands = JSON.parse(bandData);

let bands = savedBands

let bandName;
let foundationYear;
let isDisbanded;
let disbandmentYear;
let bandInfo;
let currentMembers = []
let previousMembers = []
//#endregion

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

  static CreateBand() {
    clear();
    let stopLoopCheck = false;
    bandName = prompt("Write the name of the band: ");
    while (stopLoopCheck == false) {
      foundationYear = parseInt(prompt("Write the year the band was founded (It should be written like this: yyyy): "));
      if (typeof foundationYear === 'number' && !isNaN(foundationYear)) {
        stopLoopCheck = true;
      }
      else {
        stopLoopCheck = false;
        console.log("You did not put in a valid year")
      }
    }
    stopLoopCheck = false
    while (stopLoopCheck == false) {
      console.log(`Is the band disbanded?
      1. Yes
      2. No
      `)
      isDisbanded = parseInt(prompt())
      if (isDisbanded == 1) {
        isDisbanded = "Yes"
        while (stopLoopCheck == false) {
          disbandmentYear = parseInt(prompt("Write the year the band disbanded: "));
          if (typeof disbandmentYear === 'number' && !isNaN(disbandmentYear)) {
            stopLoopCheck = true;
          } else {
            console.log("You did not put in a valid year: ")
          }

        }


      } else if (isDisbanded == 2) {
        isDisbanded = "No"
        disbandmentYear = "Currently Active"
        stopLoopCheck = true;
      } else {
        console.log("You did not give a valid answer")
      }
    }

    bandInfo = prompt("Write some additional information you want to add: ");


    let theBandToAdd = {
      'Band_Name': bandName,
      'Foundation_Year': foundationYear,
      'Disbanded': isDisbanded,
      'Disbandment_Year': disbandmentYear,
      'Band_Info': bandInfo,
      'Current_Members': currentMembers,
      'Previous_Members': previousMembers
    }
    bands.push(theBandToAdd)

  }

  static RemoveBand() {
    clear()
    console.log("Pick which which band you want to remove by picking its number")
    this.WriteBandList()

    let whichToRemove = parseInt(prompt());
    if (whichToRemove >= 0 && whichToRemove < bands.length) {
      bands.splice(whichToRemove, 1)
      console.log("removing the band!")
    }
    else {
      console.log("Is not a valid option.")
    }
  }

  static UpploadBandData() {
    fs.writeFile('./bands.json', JSON.stringify(bands, null, 2), (err) => {
      if (err) throw err;
      console.log('Band Data written to file');
    });
  }

  static WriteBandList() {
    for (let i = 0; i < bands.length; i++) {
      console.log(`${i}.`, bands[i].Band_Name);
    }
  }

  static BandInfo() {
    clear();
    console.log("Which Band do you want information of? Please pick the Band by writing the number next to their name at the bottom: ")
    this.WriteBandList();

    let whichToGetInfoFrom = parseInt(prompt());
    if (whichToGetInfoFrom >= 0 && whichToGetInfoFrom < bands.length) {
      console.log(bands[whichToGetInfoFrom])

    }
    else {
      console.log("Is not a valid option.")
    }
  }
}


export class AllBands {

}

export class Bands {

}


