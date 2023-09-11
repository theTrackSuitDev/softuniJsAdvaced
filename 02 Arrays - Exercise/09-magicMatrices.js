function magicMatrices(matrix) {
    let isMagic = true;
    let initialSum = matrix[0].reduce((a, b) => a + b, 0);

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
          colSum += matrix[row][col];            
        }
        if (colSum != initialSum) {
            isMagic = false;
            return isMagic;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0); 
        if (rowSum != initialSum) {
            isMagic = false;
            return isMagic;
        }    
    }

    return isMagic;
}

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));