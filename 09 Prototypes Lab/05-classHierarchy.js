function threeClasses() {
    class Figure {
        constructor() {
            this.units = "cm";
        }

        get area() {
            return;
        }

        changeUnits(value) {
            let oldUnits = this.units;
            this.units = value;
            if (this.constructor.name === "Circle") {
                this.radius = convertUnits(oldUnits, this.units, this.radius);
            }

            if (this.constructor.name === "Rectangle") {
                this.width = convertUnits(oldUnits, this.units, this.width);
                this.height = convertUnits(oldUnits, this.units, this.height);
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${
                this.radius
            }`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.width = width;
            this.height = height;
            super.changeUnits(units);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${
                this.width
            }, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };

    function convertUnits(oldUnits, newUnits, oldUnitsCount) {
        let result = 0;
        if (oldUnits === "cm") {
            switch (newUnits) {
                case "m":
                    result = oldUnitsCount / 100;
                    break;
                case "mm":
                    result = oldUnitsCount * 10;
                    break;
                case "cm":
                    result = oldUnitsCount;
                    break;
            }
        }

        if (oldUnits === "m") {
            switch (newUnits) {
                case "m":
                    result = oldUnitsCount;
                    break;
                case "mm":
                    result = oldUnitsCount * 1000;
                    break;
                case "cm":
                    result = oldUnitsCount * 100;
                    break;
            }
        }

        if (oldUnits === "mm") {
            switch (newUnits) {
                case "m":
                    result = oldUnitsCount / 1000;
                    break;
                case "mm":
                    result = oldUnitsCount;
                    break;
                case "cm":
                    result = oldUnitsCount / 10;
                    break;
            }
        }

        return result;
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50