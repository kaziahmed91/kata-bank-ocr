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

  describe('Recognizer#populateRawStringKeys', () => {

    it('sets the stringKeys property with the array of string keys', () => {
      let recognizer = new Recognizer(testData[0].rawRecord);
      recognizer.populateRawStringKeys();
      expect(recognizer.rawStringKeys).toEqual([ ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|', ' _ | ||_|' ]);
    })

  });

  describe('Recognizer#pushPossibleAccountNumber', () => {

    it('returns a translated account number for 000000000', () => {
      let recognizer = new Recognizer(testData[0].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('000000000');
    });

    it('returns a translated account number for 111111111', () => {
      let recognizer = new Recognizer(testData[1].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('111111111');
    });

    it('returns a translated account number for 222222222', () => {
      let recognizer = new Recognizer(testData[2].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('222222222');
    });

    it('returns a translated account number for 333333333', () => {
      let recognizer = new Recognizer(testData[3].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('333333333');
    });

    it('returns a translated account number for 444444444', () => {
      let recognizer = new Recognizer(testData[4].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('444444444');
    });

    it('returns a translated account number for 555555555', () => {
      let recognizer = new Recognizer(testData[5].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('555555555');
    });

    it('returns a translated account number for 666666666', () => {
      let recognizer = new Recognizer(testData[6].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('666666666');
    });

    it('returns a translated account number for 777777777', () => {
      let recognizer = new Recognizer(testData[7].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('777777777');
    });

    it('returns a translated account number for 888888888', () => {
      let recognizer = new Recognizer(testData[8].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('888888888');
    });

    it('returns a translated account number for 999999999', () => {
      let recognizer = new Recognizer(testData[9].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('999999999');
    });

    it('returns a translated account number for 123456789', () => {
      let recognizer = new Recognizer(testData[10].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      let illegibleCharacterCount = recognizer.possibleAccountNumbers[0].illegibleCharacterCount;
      expect(result).toEqual('123456789');
    });

    it('uses a ? character when a string key is not recognized', () => {
      let recognizer = new Recognizer(testData[12].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.possibleAccountNumbers[0].possibleAccountNumber;
      expect(result).toEqual('49006771?');
    });

    it('increments the illegibleCharacterCount when a character is not recognized', () => {
      let recognizer = new Recognizer(testData[12].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let illegibleCharacterCount = recognizer.possibleAccountNumbers[0].illegibleCharacterCount;
      expect(illegibleCharacterCount).toEqual(1);
    });

    it('does not increment the illegibleCharacterCount when all characters are recognized', () => {
      let recognizer = new Recognizer(testData[10].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let illegibleCharacterCount = recognizer.possibleAccountNumbers[0].illegibleCharacterCount;
      expect(illegibleCharacterCount).toEqual(0);
    });

    it('populates the checksumIsValid property with true when checksum is valid for 000000000', () => {
      let recognizer = new Recognizer(testData[0].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let checksumIsValid = recognizer.possibleAccountNumbers[0].checksumIsValid;
      expect(checksumIsValid).toEqual(true);
    });

    it('populates the checksumIsValid property with false when checksum is invalid for 999999999', () => {
      // I know from the test data, that the 999999999 is not valid without error correction
      let recognizer = new Recognizer(testData[9].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let checksumIsValid = recognizer.possibleAccountNumbers[0].checksumIsValid;
      expect(checksumIsValid).toEqual(false);
    });

  });

  describe('Recognizer#isChecksumValid', () => {

    it('calculates a valid checksum from 000000000', () => {
      let recognizer = new Recognizer(testData[0].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.isChecksumValid(recognizer.possibleAccountNumbers[0]);
      expect(result).toEqual(true);
    });

    it('calculates a valid checksum from 899999999', () => {
      // I know from the test data, that the this error corrected value should be valid
      let rawRecord = [
        ' _  _  _  _  _  _  _  _  _ ',
        '|_||_||_||_||_||_||_||_||_|',
        '|_| _| _| _| _| _| _| _| _|'
      ];
      let recognizer = new Recognizer(rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.isChecksumValid(recognizer.possibleAccountNumbers[0]);
      expect(result).toEqual(true);
    });

    it('calculates a invalid checksum', () => {
      // I know from the test data, that the 999999999 is not valid without error correction
      let recognizer = new Recognizer(testData[9].rawRecord);
      recognizer.populateRawStringKeys();
      recognizer.pushPossibleAccountNumber(recognizer.rawStringKeys, true);
      let result = recognizer.isChecksumValid(recognizer.possibleAccountNumbers[0]);
      expect(result).toEqual(false);
    });

  });

  describe('Recognizer#correctForErrors', () => {

    it('corrects errors and pushes numbers that pass the checksum into the array of possibleAccountNumbers', () => {
      // I know from the test data that this record should be ambigious
      let recognizer = new Recognizer(testData[18].rawRecord);
      recognizer.populateRawStringKeys();
      // error correct, starting with the raw string keys
      recognizer.correctForErrors(recognizer.rawStringKeys);
      // and assert against the test data from the assignment, all looks good!
      expect(recognizer.possibleAccountNumbers.length).toEqual(3);
      expect(recognizer.possibleAccountNumbers[0].possibleAccountNumber).toEqual('888886888');
      expect(recognizer.possibleAccountNumbers[1].possibleAccountNumber).toEqual('888888988');
      expect(recognizer.possibleAccountNumbers[2].possibleAccountNumber).toEqual('888888880');
    })

  });

});
