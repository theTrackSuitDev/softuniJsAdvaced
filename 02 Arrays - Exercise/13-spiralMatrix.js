function spiralMatrix(cols, rows) {
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix.push([]);
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = "X";            
        }
    }

    let maxNum = rows * cols;
    let firstFreeRow = 0;
    let lastFreeRow = rows - 1;
    let firstFreeCol = 0;
    let lastFreeCol = cols - 1;
    let fillNum = 1;

    while (fillNum <= maxNum) {
        for (let col = 0; col < cols; col++) {
            if (matrix[firstFreeRow][col] === "X") {
                matrix[firstFreeRow][col] = fillNum;
                fillNum++;
            }
        }
        firstFreeRow++;

        for (let row = 0; row < rows; row++) {
            if (matrix[row][lastFreeCol] === "X") {
                matrix[row][lastFreeCol] = fillNum;
                fillNum++;
            }
        }
        lastFreeCol--;

        for (let col = cols - 1; col >= 0; col--) {
            if (matrix[lastFreeRow][col] === "X") {
                matrix[lastFreeRow][col] = fillNum;
                fillNum++;
            }
        }
        lastFreeRow--;

        for (let row = rows - 1; row >= 0; row--) {
            if (matrix[row][firstFreeCol] === "X") {
                matrix[row][firstFreeCol] = fillNum;
                fillNum++;
            }
        }
        firstFreeCol++;          
    }

    for (const row of matrix) {
        console.log(row.join(" "));
    }
}

spiralMatrix(5, 5);