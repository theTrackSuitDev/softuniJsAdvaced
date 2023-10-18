function extensibleObject() {
    class Obj {
        constructor() {}

        extend(template) {
            let currentProto = Object.getPrototypeOf(this);
            for (const key in template) {
                if (Object.hasOwnProperty.call(template, key)) {
                    const element = template[key];
                    if (typeof element != "function") {
                        this[key] = element;
                    } else {
                        currentProto[key] = element;
                    }
                }
            }
        }
    }

    return new Obj();
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: "someString",
};
myObj.extend(template);