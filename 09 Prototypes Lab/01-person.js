class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let validationPattern = /^[a-zA-Z]+[\s]{1}[a-zA-Z]+$/g;
        if (validationPattern.exec(value)) {
            this.firstName = value.split(" ")[0];
            this.lastName = value.split(" ")[1];
        }
    }
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson