import Recognizer from '../src/library';
import testData from './test_data';

describe('Recognizer', () => {
 
  it('can haz testData', () => {
    expect(testData[0].expectedResult).toEqual('000000000');
  });

  describe('Recognizer#constructor', () => {

    it('sets the rawRecord property', () => {
      let recognizer = new Recognizer(['___']);
      expect(recognizer.rawRecord[0]).toEqual('___');
    })

  });

  describe('Recognizer#populateStringKeys', () => {

    it('sets the stringKeys property with the array of string keys', () => {
      let recognizer = new Recognizer(testData[0].rawRecord);
      recognizer.populateStringKeys();
      expect(recognizer.stringKeys[0]).toEqual([ ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|' ]);
    })

  });

  describe('Recognizer#mapStringKeysToAccountNumber', () => {

    it('returns a translated account number for 000000000', () => {
      let recognizer = new Recognizer(testData[0].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('000000000');
    });

    it('returns a translated account number for 111111111', () => {
      let recognizer = new Recognizer(testData[1].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('111111111');
    });

    it('returns a translated account number for 222222222', () => {
      let recognizer = new Recognizer(testData[2].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('222222222');
    });

    it('returns a translated account number for 333333333', () => {
      let recognizer = new Recognizer(testData[3].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('333333333');
    });

    it('returns a translated account number for 444444444', () => {
      let recognizer = new Recognizer(testData[4].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('444444444');
    });

    it('returns a translated account number for 555555555', () => {
      let recognizer = new Recognizer(testData[5].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('555555555');
    });

    it('returns a translated account number for 666666666', () => {
      let recognizer = new Recognizer(testData[6].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('666666666');
    });

    it('returns a translated account number for 777777777', () => {
      let recognizer = new Recognizer(testData[7].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('777777777');
    });

    it('returns a translated account number for 888888888', () => {
      let recognizer = new Recognizer(testData[8].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('888888888');
    });

    it('returns a translated account number for 999999999', () => {
      let recognizer = new Recognizer(testData[9].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('999999999');
    });

    it('returns a translated account number for 123456789', () => {
      let recognizer = new Recognizer(testData[10].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      let illegibleCharacterCount = recognizer.recognized.illegibleCharacterCount[0];
      expect(result).toEqual('123456789');
    });

    it('uses a ? character when a string key is not recognized', () => {
      let recognizer = new Recognizer(testData[12].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let result = recognizer.recognized.possibleAccountNumbers[0];
      expect(result).toEqual('49006771?');
    });

    it('increments the illegibleCharacterCount when a character is not recognized', () => {
      let recognizer = new Recognizer(testData[12].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let illegibleCharacterCount = recognizer.recognized.illegibleCharacterCount[0];
      expect(illegibleCharacterCount).toEqual(1);
    });

    it('does not increment the illegibleCharacterCount when all characters are recognized', () => {
      let recognizer = new Recognizer(testData[10].rawRecord);
      recognizer.populateStringKeys();
      recognizer.mapStringKeysToAccountNumber(recognizer.stringKeys[0]);
      let illegibleCharacterCount = recognizer.recognized.illegibleCharacterCount[0];
      expect(illegibleCharacterCount).toEqual(0);
    });

  });



});
