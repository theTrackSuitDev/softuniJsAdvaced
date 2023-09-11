function sortByTwoCriteria(inputArray) {
    let arrayOfStrings = inputArray.slice();
    arrayOfStrings.sort((a, b) => a.length - b.length || a.localeCompare(b));

    arrayOfStrings.forEach(element => {
        console.log(element);
    });
}

sortByTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']);