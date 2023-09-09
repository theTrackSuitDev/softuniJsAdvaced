function diagonalSums(matrix) {
    let sumDiagOne = 0;
    let sumDiagTwo = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumDiagOne += matrix[i][i];
        sumDiagTwo += matrix[i][matrix.length - 1 - i];
    }

    console.log(`${sumDiagOne} ${sumDiagTwo}`);
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);