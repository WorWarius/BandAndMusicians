const bandsData = require('./bands.json')
const musicianData = require('./musicians.json')

export class Musician {
  constructor(info, name, birthDay, currentBands, previousBands, instruments) {
    this.information = info;
    this.theName = name;
    this.theBirthDay = birthDay;
    this.theCurrentBands = currentBands
    this.thePreviousBands = previousBands
    this.theInstruments = instruments
  }
  displayMusician(theMusician) //denna metod ska skriva ut all informationen om Musikern som de bad att få info om
  {

  }

}
export class Band {
  constructor() {
    this.bandInformation = info;
    this.foundation = birthDay;
    this.disbandDate = currentBands
    this.membersInfo()
    this.previousMemberInfo()
  }

  displayBand(theBand) //denna metod ska skriva ut all informationen om bandet som de bad att få info om 
  {

  }
}