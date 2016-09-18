
class Recognizer {

  constructor(rawRecord) {
    this.rawRecord = rawRecord;
    this.stringKeys = [];
  } 

  populateStringKeys() {
    let parsedRecord = this.rawRecord;
    this.stringKeys.push(parsedRecord);
  }

}


export default Recognizer