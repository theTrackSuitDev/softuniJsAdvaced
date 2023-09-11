function listOfNames(array) {
    let arrayOfNames = array.slice();
    arrayOfNames.sort((a, b) => a.localeCompare(b));

    arrayOfNames.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);