function biggerHalf(arr = []) {
    let inputArray = arr.slice();
    inputArray.sort((a, b) => a - b);
    let startIndex = Math.floor(inputArray.length / 2);
    let resultArray = inputArray.slice(startIndex);

    return resultArray;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);