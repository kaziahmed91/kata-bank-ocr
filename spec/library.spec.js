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
      expect(recognizer.stringKeys[0]).toEqual([ ' _  _  _  _  _  _  _  _  _ ', '| || || || || || || || || |', '|_||_||_||_||_||_||_||_||_|' ]);
    })

  });


});
