function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let result = array
        .map(Number)
        .slice(startIndex, endIndex + 1)
        .reduce((acc, el) => acc + el, 0);

    return result;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
