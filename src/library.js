
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
  } 

  populateStringKeys() {
    let stringKeys = ['','','','','','','','','',];
    // each field is 3 characters wide
    let fieldWidth = 3;
    for ( let row of this.rawRecord) {
      for ( let index = 0; index < stringKeys.length; index ++) {
        stringKeys[index] = stringKeys[index] + row.slice(index * fieldWidth, (index * fieldWidth) + fieldWidth);
      }
    }
    this.stringKeys.push(stringKeys);
  }

  mapStringKeysToIntegers(stringKeys) {
    let accountNumbers = [];
    stringKeys.forEach((key, index) => {
      let translatedNumber = characterMap[key] || '?';
      accountNumbers[index] = translatedNumber;
    });
    return accountNumbers.join('');
  }

}


export default Recognizer