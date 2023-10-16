const bandsData = require('./bands.json')
const musicianData = require('./musicians.json')

export class Musician {
  constructor(name, lastName, birthDay, info, currentBands, previousBands, instruments) {
    this.theName = name;
    this.theLastName = lastName
    this.theBirthDay = birthDay;
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