function sortArray(array, order) {
    order === "asc" ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);

    return array;
}

console.log(sortArray([14, 7, 17, 6, 8], "desc"));
