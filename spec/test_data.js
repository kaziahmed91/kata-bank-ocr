
export default [
  { // use case 1
    rawRecord: [
      ' _  _  _  _  _  _  _  _  _ ',
      '| || || || || || || || || |',
      '|_||_||_||_||_||_||_||_||_|'
      ],                           
    expectedResult: '000000000',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
'                           ',
'  |  |  |  |  |  |  |  |  |',
'  |  |  |  |  |  |  |  |  |'
],                           
    expectedResult: '111111111',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
' _| _| _| _| _| _| _| _| _|',
'|_ |_ |_ |_ |_ |_ |_ |_ |_ '
],                           
    expectedResult: '222222222',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
' _| _| _| _| _| _| _| _| _|',
' _| _| _| _| _| _| _| _| _|'
],                           
    expectedResult: '333333333',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
'                           ',
'|_||_||_||_||_||_||_||_||_|',
'  |  |  |  |  |  |  |  |  |'
],                           
    expectedResult: '444444444',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
' _| _| _| _| _| _| _| _| _|'
],                           
    expectedResult: '555555555',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
'|_||_||_||_||_||_||_||_||_|'
],                           
    expectedResult: '666666666',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'  |  |  |  |  |  |  |  |  |',
'  |  |  |  |  |  |  |  |  |'
],                           
    expectedResult: '777777777',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_||_||_||_||_||_||_||_||_|',
'|_||_||_||_||_||_||_||_||_|'
],                           
    expectedResult: '888888888',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_||_||_||_||_||_||_||_||_|',
' _| _| _| _| _| _| _| _| _|'
],                           
    expectedResult: '999999999',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
'    _  _     _  _  _  _  _',
'  | _| _||_||_ |_   ||_||_|',
'  ||_  _|  | _||_|  ||_| _| '
],                           
    expectedResult: '123456789',
    errorCorrectedResults: [],
    errorCode: ''
  },{ // use case 3
    rawRecord: [
' _  _  _  _  _  _  _  _    ',
'| || || || || || || ||_   |',
'|_||_||_||_||_||_||_| _|  |'
],                           
    expectedResult: '000000051',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
'    _  _  _  _  _  _     _ ',
'|_||_|| || ||_   |  |  | _ ',
'  | _||_||_||_|  |  |  | _|'
],                           
    expectedResult: '49006771?',
    errorCode: 'ILL'
  },{
    rawRecord: [
'    _  _     _  _  _  _  _ ',
'  | _| _||_| _ |_   ||_||_|',
'  ||_  _|  | _||_|  ||_| _ '
],                            
    expectedResult: '1234?678?',
    errorCode: 'ILL'
  },{ // use case 4
    rawRecord: [
'                           ',
'  |  |  |  |  |  |  |  |  |',
'  |  |  |  |  |  |  |  |  |'
],                           
    expectedResult: '711111111',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'  |  |  |  |  |  |  |  |  |',
'  |  |  |  |  |  |  |  |  |'
],                           
    expectedResult: '777777177',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
' _|| || || || || || || || |',
'|_ |_||_||_||_||_||_||_||_|'
],                           
    expectedResult: '200800000',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
' _| _| _| _| _| _| _| _| _|',
' _| _| _| _| _| _| _| _| _|'
],                           
    expectedResult: '333393333', 
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_||_||_||_||_||_||_||_||_|',
'|_||_||_||_||_||_||_||_||_|'
],                           
    expectedResult: '888888888',
    errorCorrectedResults: ['888886888', '888888880', '888888988'],
    errorCode: 'AMB'
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
' _| _| _| _| _| _| _| _| _|'
],                           
    expectedResult: '555555555',
    errorCorrectedResults: ['555655555', '559555555'],
    errorCode: 'AMB'
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
'|_||_||_||_||_||_||_||_||_|'
],                           
    expectedResult: '666666666',
    errorCorrectedResults: ['666566666', '686666666'],
    errorCode: 'AMB'
  },{
    rawRecord: [
' _  _  _  _  _  _  _  _  _ ',
'|_||_||_||_||_||_||_||_||_|',
' _| _| _| _| _| _| _| _| _|'
],                           
    expectedResult: '999999999',
    errorCorrectedResults: ['899999999', '993999999', '999959999'],
    errorCode: 'AMB'
  },{
    rawRecord: [
'    _  _  _  _  _  _     _ ',
'|_||_|| || ||_   |  |  ||_ ',
'  | _||_||_||_|  |  |  | _|'
],                           
    expectedResult: '490067715',
    errorCorrectedResults: ['490067115', '490067719', '490867715'],
    errorCode: 'AMB'
  },{
    rawRecord: [
'    _  _     _  _  _  _  _ ',
' _| _| _||_||_ |_   ||_||_|',
'  ||_  _|  | _||_|  ||_| _|'
],                           
    expectedResult: '123456789',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
' _     _  _  _  _  _  _    ',
'| || || || || || || ||_   |',
'|_||_||_||_||_||_||_| _|  |'
],                           
    expectedResult: '000000051',
    errorCorrectedResults: [],
    errorCode: ''
  },{
    rawRecord: [
'    _  _  _  _  _  _     _ ',
'|_||_|| ||_||_   |  |  | _ ',
'  | _||_||_||_|  |  |  | _|'
],                           
    expectedResult: '490867715', 
    errorCorrectedResults: [],
    errorCode: ''
  }
];
