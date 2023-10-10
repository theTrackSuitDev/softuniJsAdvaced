const sum = require('./04.sumOfNumbers');
const expect = require('chai').expect;

describe('Sum of numbers in array', () => {
    it('Should sum positive numbers', () => {
        // Arrange
            let inputArray = [1, 5, 10];
            let expectedResult = 16;

        // Act
            let returnedResult = sum(inputArray);

        // Assert

            expect(returnedResult).to.equal(expectedResult)
    });

    it('Should sum negative numbers', () => {
        // Arrange
            let inputArray = [-1, -5, -10];
            let expectedResult = -16;

        // Act
            let returnedResult = sum(inputArray);

        // Assert

            expect(returnedResult).to.equal(expectedResult)
    });

    it('Should sum mixed numbers', () => {
        // Arrange
            let inputArray = [-1, -5, 10];
            let expectedResult = 4;

        // Act
            let returnedResult = sum(inputArray);

        // Assert

            expect(returnedResult).to.equal(expectedResult)
    });

    it('Should sum one number', () => {
        // Arrange
            let inputArray = [1];
            let expectedResult = 1;

        // Act
            let returnedResult = sum(inputArray);

        // Assert

            expect(returnedResult).to.equal(expectedResult)
    });
});