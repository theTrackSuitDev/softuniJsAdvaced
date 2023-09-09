function biggestElement(matrix) {
    let biggestArray = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].sort((a, b) => b - a);
        biggestArray.push(matrix[i][0]);
    }

    biggestArray.sort((a, b) => b - a);
    return biggestArray[0];
}
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);