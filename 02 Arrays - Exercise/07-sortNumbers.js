function sortNumbers(array) {
    let arrayOfNumbers = array.slice();
    arrayOfNumbers.sort((a, b) => a - b);
    let resultArray = [];
    while (arrayOfNumbers.length > 0) {
        resultArray.push(arrayOfNumbers.shift());
        if (arrayOfNumbers.length > 0) {
            resultArray.push(arrayOfNumbers.pop());
        }
    }

    return resultArray;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);