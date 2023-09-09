function equalNeighbors(matrix) {
    let equalCounter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col + 1]) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    equalCounter++;
                }
            }

            if (matrix[row + 1]) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    equalCounter++;
                }
            }
        }
    }

    return equalCounter;
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);