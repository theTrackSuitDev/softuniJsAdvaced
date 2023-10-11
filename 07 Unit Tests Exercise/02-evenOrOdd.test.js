const isOddOrEven = require('./02-evenOrOdd');
const expect = require('chai').expect;

describe('Checks if string length is odd or even', () => {
    it('Should return undefined if provided a non-string argument', () => {
        // Arrange
        let input = 4;

        //Act
        let expectedResult = undefined;
        let actualResult = isOddOrEven(input);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return even if provided an empty string', () => {
        // Arrange
        let input = '';

        //Act
        let expectedResult = 'even';
        let actualResult = isOddOrEven(input);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return even if provided an string with even length', () => {
        // Arrange
        let input = 'ab';

        //Act
        let expectedResult = 'even';
        let actualResult = isOddOrEven(input);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return odd if provided an string with odd length', () => {
        // Arrange
        let input = 'a';

        //Act
        let expectedResult = 'odd';
        let actualResult = isOddOrEven(input);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
});