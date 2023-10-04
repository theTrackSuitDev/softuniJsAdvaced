function cars(inputArray) {
    commandsArray = inputArray.slice();
    let carsObject = {};

    function create(name) {
        carsObject[name] = {};
    }

    function inherit(name, parent) {
        carsObject[name] = Object.create(carsObject[parent]);
    }

    function set(name, key, value) {
        carsObject[name][key] = value;
    }

    function print(name) {
        let propertiesArray = [];
        for (const key in carsObject[name]) {
            propertiesArray.push(`${key}:${carsObject[name][key]}`);
        }

        console.log(propertiesArray.join(','));
    }

    for (const command of commandsArray) {
        let currentCommandArray = command.split(" ");
        let action = currentCommandArray.shift();
        let name = currentCommandArray.shift();

        switch (action) {
            case "create":
                if (currentCommandArray.length == 0) {
                    create(name);
                } else {
                    let parent = currentCommandArray.pop();
                    inherit(name, parent);
                }
                break;
            case "set":
                let [key, value] = currentCommandArray;
                set(name, key, value);
                break;
            case "print":
                print(name);
                break;

            default:
                break;
        }
    }
}

cars([
    "create c1",
    "create c2 inherit c1",
    "set c1 color red",
    "set c2 model new",
    "print c1",
    "print c2",
]);
