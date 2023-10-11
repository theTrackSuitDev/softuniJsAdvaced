const rgbToHexColor = require("./06-rgbToHexColor");
const expect = require("chai").expect;

describe("Convert RGB color to Hex string", () => {
    it('Should return six Fs when rgb values are maxed', () => {
        // Arrange
        let [red, green, blue] = [255, 255, 255];
        let expectedResult = '#FFFFFF';

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return six 0s when rgb values are 0', () => {
        // Arrange
        let [red, green, blue] = [0, 0, 0];
        let expectedResult = '#000000';

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should convert correctly with random valid egb values', () => {
        // Arrange
        let [red, green, blue] = [200, 150, 100];
        let expectedResult = '#C89664';

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a non-numeric value is provided for red', () => {
        // Arrange
        let [red, green, blue] = ['zero', 0, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a non-numeric value is provided for green', () => {
        // Arrange
        let [red, green, blue] = [0, 'zero', 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a non-numeric value is provided for blue', () => {
        // Arrange
        let [red, green, blue] = [0, 0, 'zero'];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value > 255 is provided', () => {
        // Arrange
        let [red, green, blue] = [0, 256, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value > 255 is provided for red', () => {
        // Arrange
        let [red, green, blue] = [256, 0, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value > 255 is provided for green', () => {
        // Arrange
        let [red, green, blue] = [0, 256, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value > 255 is provided for blue', () => {
        // Arrange
        let [red, green, blue] = [0, 0, 256];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value < 0 is provided for red', () => {
        // Arrange
        let [red, green, blue] = [-1, 0, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value < 0 is provided for green', () => {
        // Arrange
        let [red, green, blue] = [0, -1, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a value < 0 is provided for blue', () => {
        // Arrange
        let [red, green, blue] = [0, 0, -1];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    
    it('Should return undefined if a red value is provided as string', () => {
        // Arrange
        let [red, green, blue] = ["0", 0, 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a green value is provided as string', () => {
        // Arrange
        let [red, green, blue] = [0, "0", 0];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });

    it('Should return undefined if a blue value is provided as string', () => {
        // Arrange
        let [red, green, blue] = [0, 0, "0"];
        let expectedResult = undefined;

        // Act
        let returnedResult = rgbToHexColor(red, green, blue);

        //Assert
        expect(returnedResult).to.equal(expectedResult);
    });
});