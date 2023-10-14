class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hexValue = (this.value >>> 0).toString(16).toUpperCase();
        return `0x${hexValue}`;
    }

    plus(number) {
        let newValue = this.value;
        number instanceof Hex
            ? (newValue += number.value)
            : (newValue += number);

        return new Hex(newValue);
    }

    minus(number) {
        let newValue = this.value;
        number instanceof Hex
            ? (newValue -= number.value)
            : (newValue -= number);

        return new Hex(newValue);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
