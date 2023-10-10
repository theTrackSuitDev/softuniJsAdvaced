let createCalculator = require('./07-addAndSubtract');
let expect = require('chai').expect;

describe('Create calculator object', () => {
    it('Should return object with add() property', () => {
        // Arrange
            let calculator = createCalculator();

        // Act
            let hasAddProperty = calculator.hasOwnProperty('add');
            let isFunction = typeof(calculator.add);
            

        // Assert
            expect(hasAddProperty).to.equal(true);
            expect(isFunction).to.equal('function');

    });

    it('Should return object with subtract() property', () => {
        // Arrange
            let calculator = createCalculator();

        // Act
            let hasSubtractProperty = calculator.hasOwnProperty('subtract');
            let isFunction = typeof(calculator.subtract);
            

        // Assert
            expect(hasSubtractProperty).to.equal(true);
            expect(isFunction).to.equal('function');

    });

    it('Should return object with get() property', () => {
        // Arrange
            let calculator = createCalculator();

        // Act
            let hasGetProperty = calculator.hasOwnProperty('get');
            let isFunction = typeof(calculator.get);
            

        // Assert
            expect(hasGetProperty).to.equal(true);
            expect(isFunction).to.equal('function');

    });

    it('Should add number to sum', () => {
        // Arrange
            let calculator = createCalculator();
            let initialSum = calculator.get();

        // Act
            calculator.add(1);
            let newSum = calculator.get();    

        // Assert
            expect(newSum).to.equal(initialSum + 1);

    });

    it('Should add number as string to sum', () => {
        // Arrange
            let calculator = createCalculator();
            let initialSum = calculator.get();

        // Act
            calculator.add("1");
            let newSum = calculator.get();    

        // Assert
            expect(newSum).to.equal(initialSum + 1);

    });

    it('Should subtract number from sum', () => {
        // Arrange
            let calculator = createCalculator();
            let initialSum = calculator.get();

        // Act
            calculator.subtract(4);
            let newSum = calculator.get();    

        // Assert
            expect(newSum).to.equal(initialSum - 4);

    });

    it('Should subtract number as string from sum', () => {
        // Arrange
            let calculator = createCalculator();
            let initialSum = calculator.get();

        // Act
            calculator.subtract("4");
            let newSum = calculator.get();    

        // Assert
            expect(newSum).to.equal(initialSum - 4);

    });

    it('Should keep the sum as internal value', () => {
        // Arrange
            let calculator = createCalculator();
            let initialSum = calculator.get();

        // Act
            initialSum++;
            let newSum = calculator.get();    

        // Assert
            expect(newSum).to.equal(initialSum - 1);

    });

});