
const CHARACTER_MAP = {
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
    this.rawStringKeys = [];
    this.possibleAccountNumbers = [];
  } 

  populateRawStringKeys() {
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
    this.rawStringKeys = stringKeys;
  }

  pushPossibleAccountNumber(stringKeys) {
    let { possibleAccountNumber, illegibleCharacterCount } = mapStringKeysToAccountNumber(stringKeys);
    let newRecord = getEmptyAccountNumberRecord();
    newRecord.possibleAccountNumber = possibleAccountNumber;
    newRecord.illegibleCharacterCount = illegibleCharacterCount;
    newRecord.checksumIsValid = this.isChecksumValid(newRecord);
    this.possibleAccountNumbers.push(newRecord);
  }

  isChecksumValid(possibleAccountNumber) {
    let checksumIsValid = false;
    const MOD = 11;
    // From the requirements:
    // account number:  3  4  5  8  8  2  8  6  5
    // position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1
    //   position idx:  0  1  2  3  4  5  6  7  8
    // checksum calculation:
    // (d1+2*d2+3*d3 +..+9*d9) mod 11 = 0
    if ( possibleAccountNumber.illegibleCharacterCount === 0 ) {
      let numToCheck = possibleAccountNumber.possibleAccountNumber;
      let d9 = getAccountCharacterIntAt(numToCheck, 0);
      let d8 = getAccountCharacterIntAt(numToCheck, 1);
      let d7 = getAccountCharacterIntAt(numToCheck, 2);
      let d6 = getAccountCharacterIntAt(numToCheck, 3);
      let d5 = getAccountCharacterIntAt(numToCheck, 4);
      let d4 = getAccountCharacterIntAt(numToCheck, 5);
      let d3 = getAccountCharacterIntAt(numToCheck, 6);
      let d2 = getAccountCharacterIntAt(numToCheck, 7);
      let d1 = getAccountCharacterIntAt(numToCheck, 8);
      let rawSum = (d1+2*d2+3*d3+4*d4+5*d5+6*d6+7*d7+8*d8+9*d9);
      let checksum = rawSum % MOD;
      if ( checksum === 0 ) {
        checksumIsValid = true;
      }
    }
    return checksumIsValid;
  }

  // this will likely end up being a private helper,
  // defining it as class method to bootstrap TDD goodness
  errorCorrectStringKey(stringKey) {
    let stringKeyChars = stringKey.split('');
    let correctedKeyIsLegible = false;
    let correctedStringKey = '';

    // first we'll to spaces to underscores just to get this going
    for ( let index = 0; index < stringKeyChars.length; index ++) {
      if ( stringKeyChars[index] === ' ' ) {
        let stringKeyCharsCopy = stringKeyChars.slice();
        stringKeyCharsCopy.splice(index, 1, '_');
        correctedStringKey = stringKeyCharsCopy.join('');
        // check if this is now a recognizable character, if it is, we are done
        if ( CHARACTER_MAP[correctedStringKey] ) {
          break;
        }
      }
    }
    return correctedStringKey;
  }

}

// private helpers

function mapStringKeysToAccountNumber(stringKeys) {
  let accountNumberCharacters = [];
  let illegibleCharacterCount = 0;
  stringKeys.forEach((key, index) => {
    // this is a coersion bug waiting to happen...
    // it only works for zeros because we are mapping to the string '0'
    let translatedNumber = CHARACTER_MAP[key] || '?';
    accountNumberCharacters[index] = translatedNumber;
    if ( translatedNumber === '?' ) {
      illegibleCharacterCount ++;
    }
  });
  let possibleAccountNumber = accountNumberCharacters.join('');
  return { possibleAccountNumber, illegibleCharacterCount };
}

// this defines a schema for possible account number records
function getEmptyAccountNumberRecord() {
  return {
    possibleAccountNumber: '',
    illegibleCharacterCount: 0,
    checksumIsValid: null
  }
}

function getAccountCharacterIntAt(numToCheck, index) {
  let stringChar = numToCheck.slice(index, index + 1);
  return parseInt(stringChar, 10);
}

export default Recognizer;