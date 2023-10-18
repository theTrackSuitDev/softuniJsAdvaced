function solution() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.gasWeight = hasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight);
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
            this.text = text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    };
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);