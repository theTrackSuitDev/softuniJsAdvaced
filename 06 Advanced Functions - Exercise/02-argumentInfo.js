function argumentsInfo(...inputs) {
    let typesObject = {};

    for (const input of inputs) {
        let type = typeof input;
        console.log(`${type}: ${input}`);

        if (typesObject.hasOwnProperty(type)) {
            typesObject[type]++;
        } else {
            typesObject[type] = 1;
        }
    }

    let typesArray = Object.entries(typesObject);
    typesArray.sort((a, b) => b[1] - a[1]);

    typesArray.forEach(type => {
        console.log(`${type[0]} = ${type[1]}`);
    });
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); });