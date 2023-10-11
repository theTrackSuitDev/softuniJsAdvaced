const lookupChar = require('./03-charLookup');
const expect = require('chai').expect;

describe('Returns the char at a given index of a given string', () => {
    it('Should return undefined if a non-string(number) is passed', () => {
        // Arrange
        let inputStr = 4;
        let inputIndex = 4;

        //Act
        let expectedResult = undefined;
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return undefined if a non-string(array) is passed', () => {
        // Arrange
        let inputStr = ['Some string'];
        let inputIndex = 4;

        //Act
        let expectedResult = undefined;
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return undefined if a non-numeric(string) value is passed as index', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = '1';

        //Act
        let expectedResult = undefined;
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return undefined if a non-numeric(object) value is passed as index', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = {num: 10};

        //Act
        let expectedResult = undefined;
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return undefined if a non-numeric(array) value is passed as index', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = [2];

        //Act
        let expectedResult = undefined;
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return undefined if an decimal number is passed as index', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = 2.5;

        //Act
        let expectedResult = undefined;
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return <Incorrect index> if a negative index is passed', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = -2;

        //Act
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return <Incorrect index> if an out of range index is passed', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = 11;

        //Act
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return <Incorrect index> if an invalid index is passed', () => {
        // Arrange
        let inputStr = '';
        let inputIndex = 11;

        //Act
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return char at a given index of a given string', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = 0;

        //Act
        let expectedResult = 'S';
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return char at a given index of a given string', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = 10;

        //Act
        let expectedResult = 'g';
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
    it('Should return char at a given index of a given string', () => {
        // Arrange
        let inputStr = 'Some string';
        let inputIndex = 4;

        //Act
        let expectedResult = ' ';
        let actualResult = lookupChar(inputStr, inputIndex);

        //Assert
        expect(actualResult).to.equal(expectedResult);
    });
 
});