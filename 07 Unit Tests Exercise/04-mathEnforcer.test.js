const mathEnforcer = require("./04-mathEnforcer");
const expect = require("chai").expect;

describe("Object containing calculating methods", () => {
    describe("addFive method", () => {
        it("Should return undefined if not a number is passed", () => {
            // Arrange
            let input = "4";

            //Act
            let expectedResult = undefined;
            let actualResult = mathEnforcer.addFive(input);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should add 5 if a number is passed", () => {
            // Arrange
            let input = 4;

            //Act
            let expectedResult = 9;
            let actualResult = mathEnforcer.addFive(input);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should add 5 if a negative number is passed", () => {
            // Arrange
            let input = -4;

            //Act
            let expectedResult = 1;
            let actualResult = mathEnforcer.addFive(input);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should add 5 if a floating number is passed", () => {
            // Arrange
            let input = 5.5;

            //Act
            let expectedResult = 10.5;
            let actualResult = mathEnforcer.addFive(input);

            //Assert
            expect(actualResult).to.be.closeTo(expectedResult, 0.01);
        });
    });

    describe("subtractTen method", () => {
        it("Should return undefined if not a number is passed", () => {
            // Arrange
            let input = "4";

            //Act
            let expectedResult = undefined;
            let actualResult = mathEnforcer.subtractTen(input);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should subtract 10 if a number is passed", () => {
            // Arrange
            let input = 4;

            //Act
            let expectedResult = -6;
            let actualResult = mathEnforcer.subtractTen(input);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should subtract 10 if a negative number is passed", () => {
            // Arrange
            let input = -4;

            //Act
            let expectedResult = -14;
            let actualResult = mathEnforcer.subtractTen(input);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should subtract 10 if a floating number is passed", () => {
            // Arrange
            let input = 5.5;

            //Act
            let expectedResult = -4.5;
            let actualResult = mathEnforcer.subtractTen(input);

            //Assert
            expect(actualResult).to.be.closeTo(expectedResult, 0.01);
        });
    });

    describe("sum method", () => {
        it("Should return undefined if first argument is not a number", () => {
            // Arrange
            let num1 = "4";
            let num2 = 4;

            //Act
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum(num1, num2);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should return undefined if second argument is not a number", () => {
            // Arrange
            let num1 = 4;
            let num2 = "4";

            //Act
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum(num1, num2);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should return undefined if both arguments are not numbers", () => {
            // Arrange
            let num1 = "s";
            let num2 = "4";

            //Act
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum(num1, num2);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should return the sum if both arguments are numbers", () => {
            // Arrange
            let num1 = 5;
            let num2 = 10;

            //Act
            let expectedResult = 15;
            let actualResult = mathEnforcer.sum(num1, num2);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should return the sum if both arguments are negative numbers", () => {
            // Arrange
            let num1 = -5;
            let num2 = -10;

            //Act
            let expectedResult = -15;
            let actualResult = mathEnforcer.sum(num1, num2);

            //Assert
            expect(actualResult).to.equal(expectedResult);
        });

        it("Should return the sum if both arguments are floating  numbers", () => {
            // Arrange
            let num1 = 5.5;
            let num2 = -10.5;

            //Act
            let expectedResult = -5;
            let actualResult = mathEnforcer.sum(num1, num2);

            //Assert
            expect(actualResult).to.be.closeTo(expectedResult, 0.01);
        });
    });
});