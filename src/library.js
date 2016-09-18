
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