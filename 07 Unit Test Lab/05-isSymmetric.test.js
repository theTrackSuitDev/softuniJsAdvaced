let isSymmetric = require("./05-isSymmetric");
const expect = require("chai").expect;

describe("Array symmetry check with boolean value returned", () => {
    it('Should return "true" if input array is equal to reversed', () => {
        // Arrange
        let inputArray = [1, 2, 3, 3, 2, 1];
        let expectedResult = true;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "false" if input is not an array', () => {
        // Arrange
        let inputArray = "string";
        let expectedResult = false;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "false" if input array does not equal reversed', () => {
        // Arrange
        let inputArray = [1, 2, 3, 4];
        let expectedResult = false;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "true" if input array has one element', () => {
        // Arrange
        let inputArray = [1];
        let expectedResult = true;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "true" if input array is empty', () => {
        // Arrange
        let inputArray = [];
        let expectedResult = true;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "false" if input is an object', () => {
        // Arrange
        let inputArray = { object: true };
        let expectedResult = false;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "true" if symmetrical array includes non-numeric values', () => {
        // Arrange
        let inputArray = [1, "one", 1];
        let expectedResult = true;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "true" if symmetrical array includes non-numeric values only', () => {
        // Arrange
        let inputArray = ["one", "two", "two", "one"];
        let expectedResult = true;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "false" if non-symmetrical array includes non-numeric values only', () => {
        // Arrange
        let inputArray = ["one", "two", "three", "one"];
        let expectedResult = false;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "false" if invoked without argument', () => {
        // Arrange
        let expectedResult = false;

        // Act
        let returnedResult = isSymmetric();

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "true" if input array includes same values', () => {
        // Arrange
        let inputArray = [0, 0, 0, 0, 0, 0, 0, 0];
        let expectedResult = true;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return "false" if input array contains number as string', () => {
        // Arrange
        let inputArray = [0, "0"];
        let expectedResult = false;

        // Act
        let returnedResult = isSymmetric(inputArray);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });
});
