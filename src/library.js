
const characterMap = {
  '\
   \
  |\
  |' : '1',
  '\
 _ \
 _|\
|_ ' : '2',
  '\
 _ \
 _|\
 _|' : '3',
  '\
   \
|_|\
  |' : '4',
  '\
 _ \
|_ \
 _|' : '5',
  '\
 _ \
|_ \
|_|' : '6',
  '\
 _ \
  |\
  |' : '7',
  '\
 _ \
|_|\
|_|' : '8',
  '\
 _ \
|_|\
 _|' : '9',
  '\
 _ \
| |\
|_|' : '0'
};

class Recognizer {

  constructor(rawRecord) {
    this.rawRecord = rawRecord || [];
    this.stringKeys = [];
    this.recognized = [];
  } 

  populateStringKeys() {
    let stringKeys = ['','','','','','','','','',];
    // each field is 3 characters wide
    let fieldWidth = 3;
    for ( let row of this.rawRecord) {
      // each row in the record array is a string
      // this will slice out characters 1,2 and 3 into first key
      // 4, 5 and 6 into second etc.
      // each of the three rows in the record will append to the string key
      // this gives us a really hard to read simple string we can map to an integer
      for ( let index = 0; index < stringKeys.length; index ++) {
        stringKeys[index] = stringKeys[index] + row.slice(index * fieldWidth, (index * fieldWidth) + fieldWidth);
      }
    }
    this.stringKeys.push(stringKeys);
  }

  mapStringKeysToAccountNumber(stringKeys) {
    let accountNumberCharacters = [];
    let illegibleCharacterCount = 0;
    stringKeys.forEach((key, index) => {
      let translatedNumber = characterMap[key] || '?';
      accountNumberCharacters[index] = translatedNumber;
      if ( translatedNumber === '?' ) {
        illegibleCharacterCount ++;
      }
    });
    let accountNumber = accountNumberCharacters.join('');
    let newRecord = getEmptyAccountNumberRecord();
    newRecord.possibleAccountNumber = accountNumber;
    newRecord.illegibleCharacterCount = illegibleCharacterCount;
    this.recognized.push(newRecord);
  }

}

// private helpers

// this defines a schema for possible account number records
function getEmptyAccountNumberRecord() {
  return {
    possibleAccountNumber: '',
    illegibleCharacterCount: 0
  }
}

export default Recognizer;